'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Copy } from 'lucide-react';
import { useGetVehicle } from '@/app/(buyer)/api/search';
import { usePathname, useRouter } from 'next/navigation';
import { VehicleData } from '@/types/types';
import { useCreateOrder } from '@/app/(buyer)/api/payment';
// import { endpoints } from '@/axios';
import { Failure, Success } from '@/app/(seller)/sell-a-car/(dashboard)/_components/Icons/icon';
import { formatCurrency } from '@/lib/utils';
import Loader from '@/LoadingSkeleton/loader';
import { useToast } from '@/hooks/use-toast';
import CountdownTimer from '@/app/(buyer)/_components/CountDownTimer';
import { getSessionItem, setSessionItem } from '@/lib/Sessionstorage';
import { removeLocalItem } from '@/lib/localStorage';

export default function CreateOrder() {
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mainImage, setMainImage] = useState(vehicleData?.images[0]);
  const [copied, setCopied] = useState<string | null>(null);
  const [orderDetails, setOrderDetails] = useState<any>('');
  const [step, setStep] = useState('payentscreen');
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();
  const { getVehicle } = useGetVehicle();
  const { createOrder, isPending } = useCreateOrder();
  const paymentDetails = getSessionItem('paymetDetails');

  const handleGetVehicle = async () => {
    try {
      const response = await getVehicle({
        vehicleId: pathname.split('/').at(-1) as string,
      });
      setMainImage(response.data.images[0]);
      setVehicleData(response.data);
    } catch (error: any) {
      console.log(error, 'error');
    }
    setIsLoading(isPending);
  };
  const CreateOrder = async () => {
    try {
      const res = await createOrder({
        vehicleId: pathname.split('/').at(-1) as string,
      });
      setOrderDetails(res.data);
      setSessionItem('paymetDetails', {
        accountNumber: res.data.accountNumber,
        initiationRef: res.data.initiationRef,
        accountName: res.data.accountName,
      });
    } catch (error: any) {
      console.log(error);
      toast({
        variant: 'destructive',
        title: 'Failed',
        description: error.message,
      });
    }
  };

  useEffect(() => {
    handleGetVehicle();
    if (!paymentDetails.initiationRef) {
      CreateOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!orderDetails.initiationRef && !paymentDetails.initiationRef) {
      console.log('No initiation reference available yet, skipping SSE setup');
      removeLocalItem('dataExpiration_24h');
      return;
    }
    console.log(
      `Setting up SSE connection for ref: ${orderDetails.initiationRef || paymentDetails.initiationRef}`,
    );

    let eventSource: any = null;
    let retryCount = 0;
    const maxRetries = 3;

    const setupEventSource = () => {
      try {
        if (eventSource) {
          eventSource.close();
        }

        eventSource = new EventSource(
          `https://autobuy-latest.onrender.com/api/v1/order/transaction/notifications/${orderDetails.initiationRef || paymentDetails.initiationRef}`,
        );

        console.log('SSE connection attempt started');

        eventSource.onopen = () => {
          console.log('SSE connection established successfully');
          retryCount = 0; // Reset retry count on successful connection
        };

        // Handle incoming messages
        eventSource.onmessage = (event: { data: string }) => {
          try {
            // Check if data is available
            if (!event.data) {
              console.warn('Received SSE event with empty data');
              return;
            }

            const data = JSON.parse(event.data);
            const parsed = JSON.parse(data.data);

            if (parsed.status === 'success' || parsed.status === 'completed') {
              setStep('paymentSuccess');
              eventSource.close();
            } else if (parsed.status === 'failed' || parsed.status === 'REJECTED') {
              setStep('paymentFailure');

              eventSource.close();
            }
          } catch (err) {
            console.error('Failed to parse SSE data:', err, event.data);
          }
        };

        // Handle errors with intelligent retry logic
        eventSource.onerror = (err: any) => {
          console.error('SSE connection error:', err);

          // Check readyState (0=connecting, 1=open, 2=closed)
          if (eventSource.readyState === EventSource.CLOSED) {
            console.log('Connection closed, readyState:', eventSource.readyState);

            // Implement retry logic
            if (retryCount < maxRetries) {
              retryCount++;
              console.log(`Retrying SSE connection (${retryCount}/${maxRetries}) in 3 seconds...`);
              setTimeout(setupEventSource, 3000);
            } else {
              console.error(`Max retries (${maxRetries}) reached. Giving up on SSE connection.`);
            }
          } else if (eventSource.readyState === EventSource.CONNECTING) {
            console.log('Still trying to connect...');
          }
        };
      } catch (err) {
        console.error('Error setting up EventSource:', err);
      }
    };

    setupEventSource();

    return () => {
      console.log('Cleaning up SSE connection');
      if (eventSource) {
        eventSource.close();
        eventSource = null;
        console.log('SSE connection closed');
      }
    };
  }, [orderDetails.initiationRef, paymentDetails.initiationRef]);

  if (isLoading || isPending) {
    return <Loader />;
  }

  // const handleThumbnailClick = (image: string) => {
  //   setMainImage(image);
  // };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const VehiclDetails = ({ orientation }: { orientation?: string }) => {
    return (
      <div
        className={`flex-[2] flex flex-col ${orientation == 'row' ? 'md:flex-row' : 'flex-col'}   h-fit border border-blue-500 rounded-xl p-4   gap-8 mb-4`}
      >
        <div className="w-full">
          <Image
            src={mainImage as string}
            alt={vehicleData?.vehicleModel as string}
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="w-full space-y-4">
          <h2 className="text-3xl font-bold mb-2">
            {` ${vehicleData?.make} ${vehicleData?.vehicleModel}`}
          </h2>
          <div className=" text-sm space-y-5">
            <p>
              <span className="font-medium">Mileage:</span> {vehicleData?.mileage}
            </p>
            <p>
              <span className="font-medium">Tracking ID:</span> 4ateasdtea
            </p>
            <p>
              <span className="font-medium">VIN:</span> {vehicleData?.vin}
            </p>
            <p>
              <span className="font-medium">Amount:</span>{' '}
              <span className="text-green-600 font-bold">{formatCurrency(vehicleData?.price)}</span>
            </p>

            <p>
              <span className="font-medium">Payment Method:</span> Bank Transfer
            </p>
            <p>
              <span className="font-medium">Delivery Method:</span> Drop off
            </p>
          </div>
        </div>
      </div>
    );
  };

  const PayentSuccess = () => {
    return (
      <div className=" h-full">
        <div className="border-2 border-dashed border-blue-300 rounded-2xl p-6 bg-white">
          <div className="flex items-center justify-center mb-4">
            <Success />
          </div>
          <VehiclDetails orientation="row" />

          <div className="mt-4">
            <h1 className="font-bold text-xl">Email Instructions</h1>
            <p>Please check your email for further instructions on your purchase!</p>
          </div>

          <div className="flex items-center justify-center mt-8">
            <button
              onClick={() => router.push('/orders')}
              className="bg-primary-900 text-white px-14 py-2 rounded-sm"
            >
              Go To Portal
            </button>
          </div>
        </div>

        <div className="mt-16 px-4">
          <h1 className="font-bold text-2xl  mb-4">
            Simplify Your Vehicle Ownership Transfer with Us
          </h1>
          <p className="text-justify text-sm">
            We understand that transferring vehicle ownership can be a complex and time-consuming
            process, which is why we’re here to help you with every step. From verifying documents
            like registration certificates and proof of ownership to ensuring the chassis and engine
            numbers are accurate and confirming the vehicle isn’t listed as stolen, we handle all
            the paperwork and legal requirements. Our expert team will guide you through the
            process, saving you time and effort while ensuring everything is done correctly. With
            our service, you can have peace of mind knowing the transfer will be smooth and
            hassle-free. Ready to transfer your ownership? Let us take care of the details so you
            can enjoy your new vehicle without worry.
          </p>
        </div>
        {/* <p className="flex items-center text-sm gap-2 mt-4">
          <span>Read more </span>
          <ArrowRight size={15} />
        </p> */}
      </div>
    );
  };

  const PaymentFailure = () => {
    return (
      <div className="border-2 border-dashed border-blue-300 rounded-2xl p-6 bg-white">
        <div className="flex items-center justify-center mb-4">
          <Failure />
        </div>
        <VehiclDetails />

        <div className="mt-4">
          <h1 className="font-bold text-xl">Email Instructions</h1>
          <p>Please check your email for further instructions on your purchase!</p>
        </div>

        <div className="flex items-center justify-center mt-8">
          <button className="bg-primary-900 text-white px-14 py-2 rounded-sm">Retry</button>
        </div>
      </div>
    );
  };

  const OrderDetails = () => {
    return (
      <div className=" h-full flex-[3]">
        <h1 className="font-bold text-lg text-center mb-2">Importance Payment Notice</h1>
        <p>
          The account number provided is valid for 24 hours only. Please make payment within this
          timeframe to secure your purchase—after which the vehicle may be released to another
          buyer.
        </p>
        <p>
          {' '}
          This car is reserved for you only during this 24-hour window. We also recommend copying
          and saving the account number, as the page may refresh. If lost, you may need to restart
          your request (subject to availability).
        </p>
        <div className="flex justify-center items-center mt-8 mb-2">
          <span className="text-2xl font-medium text-primary-900 ">
            {orderDetails.accountNumber || paymentDetails.accountNumber}
          </span>
          <button
            onClick={() =>
              copyToClipboard(
                orderDetails.accountNumber || paymentDetails.accountNumber,
                'transactionId',
              )
            }
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            <Copy size={16} />
          </button>
          {copied === 'accountNumber' && (
            <span className="text-xs text-green-600 ml-1">Copied!</span>
          )}
        </div>

        <div className="text-center mb-8">
          <p className="text-2xl font-medium">
            {orderDetails.accountName || paymentDetails.accountName}
          </p>
          <p className="text-2xl font-medium">Providus Bank</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-2  space-y-2">
            <div className="text-left"> Refrence</div>
            <div className="text-right">
              {orderDetails.initiationRef || paymentDetails.initiationRef}
            </div>

            <div className="text-left">Amount</div>
            <div className="text-right">{formatCurrency(vehicleData?.price)}</div>
            <div className="text-left font-bold pt-2 border-t border-primary-900">Total</div>
            <div className="text-right font-bold pt-2 border-t border-primary-900 flex justify-end items-center">
              {formatCurrency(vehicleData?.price)}
              <button
                onClick={() =>
                  copyToClipboard(String(vehicleData?.price).replace(' NGN', ''), 'total')
                }
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <Copy size={16} />
              </button>
              {copied === 'total' && <span className=" text-green-600 ml-1">Copied!</span>}
            </div>
          </div>
        </div>
        {!isPending && <CountdownTimer hours={orderDetails.duration ?? 24} />}
      </div>
    );
  };

  const PaymentScreen = () => {
    return (
      <div className="w-full p-6 bg-white">
        <div className="w-full flex flex-col sm:flex-row gap-6 justify-center">
          <VehiclDetails />
          <OrderDetails />
        </div>
      </div>
    );
  };

  const paymentSteps: { [key: string]: JSX.Element } = {
    payentscreen: <PaymentScreen />,
    paymentSuccess: <PayentSuccess />,
    paymentFailure: <PaymentFailure />,
  };
  return (
    <div className="max-w-5xl h-full mx-auto my-8 flex items-center justify-center">
      {paymentSteps[step]}
    </div>
  );
}
