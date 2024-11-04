'use client';
import { useState } from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';

// import BasicInfo from './_components/BasicInfo';
// import BusinessInfo from './_components/BusinessInfo';
// import AccountInfo from './_components/AccountInfo';
import { cn } from '@/lib/utils';

const Signup = () => {
  // const [step, setStep] = useState(1);
  const [activeChoice, setActiveChoice] = useState(1);

  // const REGISTRATION_STEPS = [
  //   {
  //     id: '1',
  //     text: 'basicInfo',
  //     desc: ' Welcome! Create your account to sell a vehicle.',
  //     component: <BasicInfo step={step} setStep={setStep} />,
  //   },
  //   {
  //     id: '2',
  //     text: 'businessinfo',
  //     desc: 'Kindly select your Business Type',
  //     component: <BusinessInfo step={step} setStep={setStep} />,
  //   },
  //   {
  //     id: '3',
  //     text: 'accountInfo',
  //     desc: 'Add your Bank Details',
  //     component: <AccountInfo step={step} setStep={setStep} />,
  //   },
  // ];

  // const stepToRender = (key: number) => {
  //   switch (key) {
  //     case 1:
  //       return <BasicInfo step={step} setStep={setStep} />;

  //     case 2:
  //       return <BusinessInfo step={step} setStep={setStep} />;

  //     case 3:
  //       return <AccountInfo step={step} setStep={setStep} />;

  //     default:
  //       break;
  //   }
  // };

  return (
    <MaxWidthWrapper>
      <section className="h-[calc(100vh_-_76px)] w-full flex items-center justify-center ">
        <div className="max-w-lg">
          <h1 className="font-bold text-3xl capitalize">Select your preferred option</h1>
          <p className="mb-10 text-sm text-center">Are you an Individual or a Business owner?</p>

          <div className="space-y-4 mb-3  ">
            <div
              className={cn(
                'flex gap-4 h-full border border-neutral-100 rounded-md mt-4 px-4 py-2',
                {
                  'outline outline-[4px]  outline-[#0382c8]/25': activeChoice === 1,
                },
              )}
            >
              <div
                onClick={() => setActiveChoice(1)}
                className={cn(
                  'h-8 w-9 border  border-neutral-300 outline-8 rounded-[50%] cursor-pointer',
                  {
                    ' border-8 border-secondary-500': activeChoice === 1,
                  },
                )}
              ></div>
              <p className="w-full text-sm flex items-center font-medium">I am an Individual </p>
            </div>

            <div
              className={cn('flex gap-4 border border-neutral-100 rounded-md mt-4 px-4 py-2', {
                'outline outline-[4px]  outline-[#0382c8]/25': activeChoice === 2,
              })}
            >
              <div
                onClick={() => setActiveChoice(2)}
                className={cn(
                  'h-8 w-9 border  border-neutral-300 outline-8 rounded-[50%] cursor-pointer',
                  {
                    ' border-8 border-secondary-500': activeChoice === 2,
                  },
                )}
              ></div>
              <p className="w-full text-sm flex items-center font-medium">
                i own a car sales Business
              </p>
            </div>
          </div>

          <div>
            <button className="block w-full bg-secondary-500 text-white py-2 rounded-md text-center">
              Continue
            </button>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Signup;
