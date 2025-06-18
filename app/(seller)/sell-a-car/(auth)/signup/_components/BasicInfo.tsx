'use client';
import { useState } from 'react';

import { cn } from '@/lib/utils';

type BasicInfoProps = {
  step: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
};

const BasicInfo = ({ setStep, setSelectedOption, selectedOption }: BasicInfoProps) => {
  const [activeChoice, setActiveChoice] = useState(1);

  const handleOptionSelect = (option: string, index: number) => {
    setSelectedOption(option);
    setActiveChoice(index);
  };

  return (
    <div>
      <div className="w-full ">
        <h1 className="font-bold text-3xl capitalize">Select your preferred option</h1>
        <p className="mb-10 text-sm text-center">Are you an Individual or a Business owner?</p>

        <div className="space-y-5 mb-3  ">
          <div
            onClick={() => handleOptionSelect('INDIVIDUAL', 1)}
            className={cn(
              'flex gap-4 h-full border border-neutral-100 rounded-md cursor-pointer shadow-md mt-4 px-4 py-2',
              {
                'outline outline-[4px]   outline-[#F17F5A]/25': activeChoice === 1,
              },
            )}
          >
            <div
              className={cn(
                'h-8 w-9 border  border-neutral-300 outline-8 rounded-[50%]  cursor-pointer',
                {
                  ' border-8 border-secondary-500': activeChoice === 1,
                },
              )}
            ></div>
            <p className="w-full text-sm flex items-center font-medium">I am an Individual </p>
          </div>

          <div
            onClick={() => handleOptionSelect('BUSINESS', 2)}
            className={cn(
              'flex gap-4 border border-neutral-100 rounded-md cursor-pointer shadow-md mt-4 px-4 py-2',
              {
                'outline outline-[4px]  outline-[#F17F5A]/25': activeChoice === 2,
              },
            )}
          >
            <div
              className={cn(
                'h-8 w-9 border  border-neutral-300 outline-8 rounded-[50%] cursor-pointer',
                {
                  ' border-8 border-secondary-500': activeChoice === 2,
                },
              )}
            ></div>
            <p className="w-full text-sm flex items-center font-medium">
              I own a car sales Business
            </p>
          </div>
        </div>

        <div>
          <button
            onClick={() => setStep(selectedOption === 'INDIVIDUAL' ? '2' : '3')}
            className="block w-full bg-secondary-500 text-white py-2 rounded-md text-center"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
