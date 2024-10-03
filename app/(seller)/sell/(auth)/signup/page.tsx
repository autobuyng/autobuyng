'use client';
import { useState } from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';

import BasicInfo from './_components/BasicInfo';
import BusinessInfo from './_components/BusinessInfo';
import AccountInfo from './_components/AccountInfo';
import { cn } from '@/lib/utils';

const Signup = () => {
  const [step, setStep] = useState(1);

  const REGISTRATION_STEPS = [
    {
      id: '1',
      text: 'basicInfo',
      desc: ' Welcome! Create your account to sell a vehicle.',
      component: <BasicInfo step={step} setStep={setStep} />,
    },
    {
      id: '2',
      text: 'businessinfo',
      desc: 'Kindly select your Business Type',
      component: <BusinessInfo step={step} setStep={setStep} />,
    },
    {
      id: '3',
      text: 'accountInfo',
      desc: 'Add your Bank Details',
      component: <AccountInfo step={step} setStep={setStep} />,
    },
  ];

  const stepToRender = (key: number) => {
    switch (key) {
      case 1:
        return <BasicInfo step={step} setStep={setStep} />;

      case 2:
        return <BusinessInfo step={step} setStep={setStep} />;

      case 3:
        return <AccountInfo step={step} setStep={setStep} />;

      default:
        break;
    }
  };

  return (
    <MaxWidthWrapper>
      <div className="grid place-items-center min-h-screen ">
        <div lang="w-full h-full">
          <h1 className="text-center font-bold text-lg md:text-2xl mb-8 mt-4 md:mt-8 ">
            {REGISTRATION_STEPS[step - 1].desc}
          </h1>
          <div className="relative min-[700px]:w-[640px] space-y-4 pb-2   ">
            {/* <div className={cn('h-[1px] w-full bg-[#808080] absolute top-16',{})}></div> */}
            <div className="flex items-center justify-between">
              {REGISTRATION_STEPS.map((stage) => (
                <div
                  key={stage.id}
                  className={cn('z-[10]  bg-white w-full  flex  items-center justify-center ', {
                    'w-fit': stage.id === '3',
                  })}
                >
                  <span
                    className={cn(
                      'h-10 w-10 flex-shrink-0 rounded-[50%] mx-2 border border-neutral-700  flex items-center justify-center',
                      {
                        'bg-secondary-700 text-white': step >= Number(stage.id),
                      },
                    )}
                  >
                    {stage.id}
                  </span>

                  {stage.id !== '3' && (
                    <span
                      className={cn('h-[1px] w-[70%] md:w-[80%] bg-[#808080] mt-10', {
                        'bg-secondary-700': step > Number(stage.id),
                      })}
                    ></span>
                  )}
                </div>
              ))}
            </div>

            <div>{stepToRender(step)}</div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Signup;
