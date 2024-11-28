import React from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import Email from '@/app/(seller)/assets/email.svg';
import Image from 'next/image';

const EmailVerification = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Email verification</Button>
      </DialogTrigger>
      <DialogContent className="w-[85%] sm:max-w-[540px] flex justify-center items-center rounded-[10px]">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Image
              src={Email}
              alt="envvelope"
              width={100}
              height={100}
              className="w-[50px] sm:w-auto"
            />
          </div>
          <p className="text-center text-sm sm:text-base">
            A confirmation link has just been sent to your email{' '}
            <span className="text-secondary-700">Johndo***43@gmail.com</span>, kindly confirm your
            email and proceed
          </p>
          <DialogFooter>
            <button
              type="submit"
              className="bg-secondary-700 mx-auto text-white rounded text-sm font-medium px-4 py-2 sm:py-3"
            >
              Resend email
            </button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailVerification;
