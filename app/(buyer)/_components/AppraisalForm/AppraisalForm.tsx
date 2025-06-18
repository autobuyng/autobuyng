import React, { useState } from 'react';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import Download from '@/app/(buyer)/assets/download.svg';
import Image from 'next/image';

type ApppraisalFormProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppraisalForm = ({ isOpen, setIsOpen }: ApppraisalFormProps) => {
  const [step, setStep] = useState(1);

  const stepToRender = (key: number) => {
    switch (key) {
      case 1:
        return <CustomerVerification setStep={setStep} />;

      case 2:
        return <AppraisalReport />;
      default:
        break;
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90%] sm:max-w-lg">
          <div>{stepToRender(step)}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppraisalForm;

const CustomerVerification = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleVerifyClick = () => {
    setStep(2);
  };

  return (
    <div>
      <form action="">
        <div className="space-y-4">
          <div>
            {/* <p>For Individual</p> */}
            <label htmlFor="UserEmail" className="block text-sm py-1 font-medium text-neutral-500">
              Natinoal Identification Number (NIN)
            </label>

            <input
              type="text"
              id="nin"
              placeholder="123456789"
              className="mt-1 w-full rounded-sm border border-neutral-700 py-2.5 px-4 outline-none shadow-sm sm:text-sm "
            />
          </div>

          {/* <div>
            <p>For company</p>
            <label htmlFor="UserEmail" className="block text-sm  py-1 font-medium text-neutral-500">
              Coperate Affairs Commission (CAC number)
            </label>

            <input
              type="text"
              id="cac"
              placeholder="john@rhcp.com"
              className="mt-1 w-full rounded-sm border border-neutral-700 py-2.5 px-4 shadow-sm sm:text-sm outline-none"
            />
          </div> */}

          <div className="w-full">
            <button
              onClick={handleVerifyClick}
              className="w-full bg-primary-700 text-white rounded-sm py-4 px-4 text-center"
            >
              Proceed
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const AppraisalReport = () => {
  return (
    <div>
      <Image src={Download} alt="download" className="mx-auto mb-4 " width={100} height={100} />
      <p className="text-sm text-center py-4">
        Your Vehicle appraisal is ready! click the download button below
      </p>
      <button className="w-full text-white py-4 px-4 text-center bg-primary-700 rounded-sm">
        Download
      </button>
    </div>
  );
};
