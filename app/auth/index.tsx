'use client';

import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Verification from './verification/page';
import { IRegistrationPayload } from '@/Schema/authSchema';

export default function AuthDialog({
  isOpen,
  handleOpenChange,
  type,
  setType,
}: {
  isOpen: boolean;
  handleOpenChange: () => void;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [signupData, setSignupData] = useState<IRegistrationPayload | null>(null);
  const renderContent = () => {
    switch (type) {
      case 'signin':
        return <SignIn setType={setType} />;
      case 'signup':
        return <SignUp setType={setType} setSignupData={setSignupData} />;
      case 'verification':
        return <Verification signupData={signupData} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[90%] mx-auto sm:max-w-[552px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            <h1 className="text-2xl md:text-3xl text-primary-700 py-4 mb-4">
              {type === 'signin' ? 'Log in' : type === 'signup' ? 'Create your Account' : ''}
            </h1>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="-mt-8 w-full">
          <div>{renderContent()}</div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
