'use client';

import { useSearchParams } from 'next/navigation';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { useVerifyEmail } from '@/app/(buyer)/api/auth';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function VerifyEmailPage() {
  const { toast } = useToast();
  const [data, setData] = useState<any>();

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const { verifyEmail, isVerifying } = useVerifyEmail();

  const handleVerifyEmail = async () => {
    if (!token) {
      return;
    }
    try {
      const response = await verifyEmail({ token: token });
      setData(response);
      if (response.status === true) {
        toast({
          title: 'Success',
          description: response.message,
        });
      }
    } catch (error: any) {
      setData(error);
      toast({
        title: 'Success',
        description: error.message,
      });
    }
  };

  useEffect(() => {
    handleVerifyEmail();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Email Verification</h1>
        {isVerifying ? (
          <div className="flex flex-col items-center">
            <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
            <p className="mt-4 text-gray-600">Verifying your email...</p>
          </div>
        ) : data ? (
          <div className="flex flex-col items-center">
            {data.status ? (
              <CheckCircle className="h-12 w-12 text-green-500" />
            ) : (
              <XCircle className="h-12 w-12 text-red-500" />
            )}
            <p className={`mt-4 text-center ${data.status ? 'text-green-600' : 'text-red-600'}`}>
              {data.message}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
