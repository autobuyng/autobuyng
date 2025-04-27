"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Copy } from "lucide-react"
import { useGetVehicle } from "@/app/(buyer)/api/search"
import { usePathname } from "next/navigation"
import { VehicleData } from "@/types/types"
import { useCreateOrder } from "@/app/(buyer)/api/payment"

interface CarDetails {
  model: string
  mileage: string
  trackingId: string
  vin: string
  amount: string
  paymentMethod: string
  deliveryMethod: string
  images: string[]
  transactionId: string
  accountName: string
  bankName: string
  referenceNumber: string
  breakdown: {
    amount: string
    networkFee: string
    deliveryFee: string
    tax: string
    total: string
  }
  countdown: {
    minutes: number
    seconds: number
  }
}

const carDetails: CarDetails = {
  model: "Lexus Rx 350i",
  mileage: "23,000mi",
  trackingId: "1127788267T76A",
  vin: "01772729F54",
  amount: "₦14,105,860.00",
  paymentMethod: "Bank Transfer",
  deliveryMethod: "Shipping to Address",
  images: [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
  ],
  transactionId: "3001721724",
  accountName: "Account Name",
  bankName: "Bank Name",
  referenceNumber: "88A7391J83DS91",
  breakdown: {
    amount: "15,000,000.00 NGN",
    networkFee: "23,020.00 NGN",
    deliveryFee: "125,000.00 NGN",
    tax: "723,000.00 NGN",
    total: "16,078,200.00 NGN",
  },
  countdown: {
    minutes: 28,
    seconds: 56,
  },
}
export default function CreateOrder() {
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mainImage, setMainImage] = useState(vehicleData?.images[0])
  const [copied, setCopied] = useState<string | null>(null)
  const [orderDetails, setOrderDetails] = useState<any>("")
  const pathname = usePathname();
  const { getVehicle } = useGetVehicle();
  const { createOrder, isPending } = useCreateOrder()


  const handleGetVehicle = async () => {
    try {
      const response = await getVehicle({
        vehicleId: pathname.split('/').at(-1) as string,
      });

      setVehicleData(response.data);
    } catch (error) {
      console.log(error, 'error');
    } finally {
      setIsLoading(isPending);
    }
  };
  console.log(orderDetails, "orderdetails")
  const CreateOrder = async () => {
    try {
      const res = await createOrder({
        vehicleId: pathname.split('/').at(-1) as string,
      })
      setOrderDetails(res.data)
      console.log(res, "res")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetVehicle();
    CreateOrder()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <h1>loading</h1>;
  }


  const handleThumbnailClick = (image: string) => {
    setMainImage(image)
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="border-2 border-dashed border-blue-300 rounded-2xl p-6 bg-white">
        <h1 className="text-2xl font-bold text-center mb-6">AutoBuy Secure Gateway</h1>

        {/* Main Image and Car Details - Side by Side */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="md:w-1/2">
            <Image
              src={mainImage as string}
              alt={vehicleData?.vehicleModel as string}
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-md"
            />
            {/* Thumbnails below main image */}
            <div className="grid grid-cols-4 gap-2 mt-2">
              {vehicleData?.images.slice(1, 5).map((image, index) => (
                <div key={index} className="cursor-pointer" onClick={() => handleThumbnailClick(image)}>
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${carDetails.model} view ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Car Details */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold mb-2">{vehicleData?.vehicleModel}</h2>
            <div className=" text-sm space-y-4">
              <p>
                <span className="font-medium">Mileage:</span> {vehicleData?.mileage}
              </p>
              <p>
                <span className="font-medium">Tracking ID:</span> {carDetails.trackingId}
              </p>
              <p>
                <span className="font-medium">VIN:</span> {vehicleData?.vin}
              </p>
              <p>
                <span className="font-medium">Amount:</span>{" "}
                <span className="text-green-600 font-bold">{vehicleData?.price}</span>
              </p>

              {/* <p>
                <span className="font-medium">Delivery Method:</span> {carDetails.deliveryMethod}
              </p> */}
            </div>
          </div>
        </div>

        {/* Transaction ID - Centered */}
        <div className="flex justify-center items-center my-8">
          <span className="text-lg font-medium">{orderDetails.accountNumber}</span>
          <button
            onClick={() => copyToClipboard(orderDetails.accountNumber, "transactionId")}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            <Copy size={16} />
          </button>
          {copied === "accountNumber" && <span className="text-xs text-green-600 ml-1">Copied!</span>}
        </div>

        {/* Account Details - Centered */}
        <div className="text-center mb-4">
          <p className="font-medium">{orderDetails.accountName}</p>
          <p className="font-medium">{orderDetails.bankName}</p>
        </div>

        {/* Payment Breakdown - Centered with aligned columns */}
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-left">Initiations Refrence</div>
            <div className="text-right">{orderDetails.initiationRef}</div>

            <div className="text-left">Amount</div>
            <div className="text-right">{vehicleData?.price}</div>

            {/* <div className="text-left">Network Fee</div>
            <div className="text-right">{carDetails.breakdown.networkFee}</div>

            <div className="text-left">Delivery Fee</div>
            <div className="text-right">{carDetails.breakdown.deliveryFee}</div>

            <div className="text-left">Tax</div>
            <div className="text-right">{carDetails.breakdown.tax}</div> */}

            <div className="text-left font-bold pt-2 border-t">Total</div>
            <div className="text-right font-bold pt-2 border-t flex justify-end items-center">
              {vehicleData?.price}
              <button
                onClick={() => copyToClipboard(String(vehicleData?.price).replace(" NGN", ""), "total")}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <Copy size={16} />
              </button>
              {copied === "total" && <span className="text-xs text-green-600 ml-1">Copied!</span>}
            </div>
          </div>
        </div>

        {/* Footer Section - Centered */}
        {/* <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Kindly transfer exact amount to the above account.</p>
          <p className="text-sm text-gray-600 mb-4">Transaction is valid for:</p>
          <div className="text-4xl font-bold text-blue-600">
            {String(carDetails.countdown.minutes).padStart(2, "0")}:
            {String(carDetails.countdown.seconds).padStart(2, "0")}
          </div>
        </div> */}
      </div>
    </div>
  )
}
