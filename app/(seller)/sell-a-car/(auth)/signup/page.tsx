'use client';
import { useState } from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';

// import BasicInfo from './_components/BasicInfo';
// import BusinessInfo from './_components/BusinessInfo';
// import AccountInfo from './_components/AccountInfo';
// import { cn } from '@/lib/utils';
import BasicInfo from './_components/BasicInfo';
import BusinessInfo from './_components/BusinessInfo';
import AccountInfo from './_components/AccountInfo';

interface OnboardingStep {
  id: string;
  text: string;
  desc: string;
  component: JSX.Element;
}

const Signup = () => {
  const [step, setStep] = useState<string>('1');
  const [selectedOption, setSelectedOption] = useState('INDIVIDUAL');

  const ONBOARDING_STEPS: { [key: string]: OnboardingStep } = {
    '1': {
      id: '1',
      text: 'basicInfo',
      desc: ' Welcome! Create your account to sell a vehicle.',
      component: (
        <BasicInfo
          step={step}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setStep={setStep}
        />
      ),
    },

    '2': {
      id: '2',
      text: 'businessinfo',
      desc: 'Kindly select your Business Type',
      component: <BusinessInfo step={step} setStep={setStep} selectedOption={selectedOption} />,
    },

    '3': {
      id: '3',
      text: 'accountInfo',
      desc: 'Add your Bank Details',
      component: <AccountInfo selectedOption={selectedOption} step={step} setStep={setStep} />,
    },
  };

  return (
    <MaxWidthWrapper>
      <section className="min-h-[calc(100vh_-_76px)] w-full my-8 flex items-center justify-center ">
        {ONBOARDING_STEPS[step].component}
      </section>
    </MaxWidthWrapper>
  );
};

export default Signup;
