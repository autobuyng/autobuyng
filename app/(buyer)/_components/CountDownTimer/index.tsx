'use client';

import { removeLocalItem } from '@/lib/localStorage';
import { removeSessionItem } from '@/lib/Sessionstorage';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import Link from 'next/link';

interface CountdownTimerProps {
  hours: number;
}

export default function CountdownTimer({ hours }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getExpirationTime = () => {
      const stored = localStorage.getItem(`dataExpiration_${hours}h`);
      if (stored) {
        return Number.parseInt(stored);
      }
      const expiration = Date.now() + hours * 60 * 60 * 1000;
      localStorage.setItem(`dataExpiration_${hours}h`, expiration.toString());
      return expiration;
    };

    const updateCountdown = () => {
      const expiration = getExpirationTime();
      const now = Date.now();
      const difference = expiration - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        localStorage.removeItem(`dataExpiration_${hours}h`);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [hours]);

  const { hours: displayHours, minutes, seconds } = timeLeft;
  const isExpired = displayHours === 0 && minutes === 0 && seconds === 0;

  const handleCancel = () => {
    router.push(`/results/keyword=`);
    removeLocalItem(`dataExpiration_${hours}h`);
    removeSessionItem('paymentDetails');
  };

  return (
    <div className="flex items-center justify-center mt-6 ">
      <div className="text-center p-6 ">
        <p className="text-sm text-gray-700">
          Kindly transfer exact amount to the above account. Transaction is valid for:{' '}
        </p>
        {isExpired ? (
          <div className="text-red-600 font-mono text-2xl">EXPIRED</div>
        ) : (
          <div className="font-mono font-[900] text-4xl text-primary-900">
            {String(displayHours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </div>
        )}
        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={handleCancel}
            className="px-6 py-2 rounded-lg  bg-transparent border border-neutral-300 text-center"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-2 rounded-lg bg-primary-900 text-white "
          >
            {' '}
            Click here After transfer
          </button>
        </div>
      </div>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-bold text-2xl">
              Thank You for Testing AutoBuy!
            </AlertDialogTitle>
            <AlertDialogDescription>
              <p>
                This was a <strong>simulated purchase</strong> — no payment was charged.
              </p>
              <p className="">
                We&apos;d really appreciate it if you could share your experience, takes less than
                10mins of your time.Thank you.{' '}
                <Link className="text-blue-500" href="https://tally.so/r/n9gxp4" target="_blank">
                  Share Feedback{' '}
                </Link>
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
