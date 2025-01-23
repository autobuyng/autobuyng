'use client';
import { IRegistrationPayload } from '@/Schema/authSchema';
import { Loader } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Dialog,
  DialogContent,
  //   DialogDescription,
  //   DialogFooter,
  //   DialogHeader,
  //   DialogTitle,
  //   DialogTrigger,
} from '@/components/ui/dialog';
import { useResendEmail } from '@/app/(seller)/api/auth';

import Envelope from '@/app/(seller)/assets/envelope.svg';
import Image from 'next/image';

type VerificationProps = {
  signupData: IRegistrationPayload | null;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Verification = ({ signupData, isModalOpen, setIsModalOpen }: VerificationProps) => {
  const [resendResponse, setResendResponse] = useState();
  const { handleSubmit } = useForm<{ email: string }>();

  console.log(resendResponse);

  const { resendEmail, isPending } = useResendEmail();
  const handleResedEmail = async () => {
    try {
      const response = await resendEmail({ email: signupData?.email as string });
      setResendResponse(response);
      console.log(response);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="bg-white rounded-lg  p-6 max-w-sm w-full mx-auto">
          <form onSubmit={handleSubmit(handleResedEmail)}>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Verify your email
              </h2>
              <div className="mb-4 h-16 w-16 relative rounded-full bg-secondary-100 flex items-center justify-center">
                <Image src={Envelope} alt="envelope fill" fill className="object-cover" />
              </div>
              <p className="text-sm text-gray-600 mb-4 text-center">
                A confirmation link has just been sent to your email
                <span className="text-secondary-500 font-medium"> {signupData?.email}</span>. Kindly
                confirm your email and proceed.
              </p>
              <button className="bg-secondary-500 hover:bg-secondary-300 text-white text-sm font-medium py-2 px-4 rounded transition duration-300 ease-in-out">
                {isPending ? <Loader className="mx-auto animate-spin" /> : '   Resend email'}
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Verification;
