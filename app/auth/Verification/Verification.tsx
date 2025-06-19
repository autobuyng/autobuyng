'use client';
import { useResendEmail } from '@/app/(buyer)/api/auth';
import { IRegistrationPayload } from '@/Schema/authSchema';
import { Loader, Mail } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Verification = ({ signupData }: { signupData: IRegistrationPayload | null }) => {
  const [, setResendResponse] = useState();
  const { handleSubmit } = useForm<{ email: string }>();


  const { resendEmail, isPending } = useResendEmail();
  const handleResedEmail = async () => {
    try {
      const response = await resendEmail({ email: signupData?.email as string });
      setResendResponse(response);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <div className="bg-white rounded-lg  p-6 max-w-sm w-full mx-auto">
      <form onSubmit={handleSubmit(handleResedEmail)}>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">
            Verify your email
          </h2>
          <div className="mb-4 h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
            <Mail className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-sm text-gray-600 mb-4 text-center">
            A confirmation link has just been sent to your email
            <span className="text-blue-500 font-medium"> {signupData?.email}</span>. Kindly confirm
            your email and proceed.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded transition duration-300 ease-in-out">
            {isPending ? <Loader className="mx-auto animate-spin" /> : '   Resend email'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Verification;
