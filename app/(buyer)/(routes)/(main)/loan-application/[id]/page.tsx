'use client';

import EmploymentInformationForm from '@/app/(buyer)/_components/loanapplication/employment-information';
import LoanDetailsForm from '@/app/(buyer)/_components/loanapplication/loan-details';
import PersonalInformationForm from '@/app/(buyer)/_components/loanapplication/personal-infomation';
import Stepper from '@/app/(buyer)/_components/loanapplication/stepper';
import TermsAndConditionsForm from '@/app/(buyer)/_components/loanapplication/terms-and-conditions';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import { useFormStore } from '@/store/loanStore';

const steps = [
  'Personal Information',
  'Employment Information',
  'Loan Preferences',
  'Terms & Conditions',
];

export default function LoanApplicationForm() {
  const { currentStep } = useFormStore();
  console.log(currentStep, 'from steppper');
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInformationForm />;
      case 2:
        return <EmploymentInformationForm />;
      case 3:
        return <LoanDetailsForm />;
      case 4:
        return <TermsAndConditionsForm />;
      default:
        return <PersonalInformationForm />;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="text-center mb-12 bg-gray-500">
        <h1 className="text-4xl font-bold  mb-2 text-white py-8">Loan Application</h1>
        {/* <p className="text-lg text-gray-600">Complete all steps to submit your loan application</p> */}
      </div>
      {/* <div className="bg-white  border rounded-md shadow-sm overflow-hidden">{renderCurrentStep()}</div> */}
      <MaxWidthWrapper>
        <Stepper currentStep={currentStep} steps={steps} />
        <div className="max-w-5xl mx-auto p-8">
          <p className="text-sm">
            Transferring ownership of a newly purchased vehicle is an essential process to ensure
            you become the legal owner and enjoy full rights to your new vehicle. This process
            involves completing specific documentation, adhering to legal procedures, and
            interacting with various authorities to ensure full compliance with the law. From
            obtaining the necessary documents from the seller to registering the vehicle with the
            Motor Licensing Authority and updating insurance policies, each step is critical for a
            smooth transition. Recognizing that this can be overwhelming, AutoBuy is here to handle
            it all for you, prioritizing your convenience every step of the way.
          </p>
          <p className="text-sm">
            {' '}
            This guide outlines our streamlined process, providing clear instructions, minimizing
            complications, and ensuring a hassle-free transfer of vehicle ownership. At AutoBuy, we
            are committed to making your experience seamless and stress-free.{' '}
          </p>
        </div>
        {renderCurrentStep()}
      </MaxWidthWrapper>
    </div>
  );
}
