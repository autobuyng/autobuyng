'use client';

import { useToast } from '@/hooks/use-toast';
import { useFormStore, type TermsAndConditions } from '@/store/loanStore';
import { useForm } from 'react-hook-form';
// import { useFormStore, type TermsAndConditions } from "@/store/form-store"

export default function TermsAndConditionsForm() {
  const { toast } = useToast();
  const { formData, updateTermsAndConditions, setCurrentStep } = useFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TermsAndConditions>({
    defaultValues: formData.termsAndConditions,
  });

  const onSubmit = (data: TermsAndConditions) => {
    updateTermsAndConditions(data);

    // Combine all data in the final structure (excluding financial information)
    const finalData = {
      personalInformation: {
        firstName: formData.personalInformation.firstName,
        lastName: formData.personalInformation.lastName,
        email: formData.personalInformation.email,
        phoneNumber: formData.personalInformation.phoneNumber,
        dateOfBirth: formData.personalInformation.dateOfBirth,
        nationalId: formData.personalInformation.nationalId,
        address: formData.personalInformation.address,
        city: formData.personalInformation.city,
        state: formData.personalInformation.state,
        postalCode: formData.personalInformation.postalCode,
      },
      employmentInformation: {
        profession: formData.employmentInformation.profession,
        employmentType: formData.employmentInformation.employmentType,
        industry: formData.employmentInformation.industry,
        employerName: formData.employmentInformation.employerName,
        employerAddress: formData.employmentInformation.employerAddress,
        yearsWithEmployer: formData.employmentInformation.yearsWithEmployer,
        hasSideBusiness: formData.employmentInformation.hasSideBusiness,
        businessName: formData.employmentInformation.businessName,
        businessRegNumber: formData.employmentInformation.businessRegNumber,
        businessType: formData.employmentInformation.businessType,
        directorsBVN: formData.employmentInformation.directorsInformation?.directorsBVN,
        directorsFirstName: formData.employmentInformation.directorsInformation?.directorsFirstName,
        directorsLastName: formData.employmentInformation.directorsInformation?.directorsLastName,
        totalMonthlyExpenses: formData.employmentInformation.totalMonthlyExpenses,
        totalTakeHomePay: formData.employmentInformation.totalTakeHomePay,
        vehiclePurpose: formData.employmentInformation.vehiclePurpose,
      },
      loanDetails: {
        desiredEquityContribution: formData.loanDetails.desiredEquityContribution,
        desiredMonthlyPayment: formData.loanDetails.desiredMonthlyPayment,
        interestRateType: formData.loanDetails.interestRateType,
        desiredInterestRate: formData.loanDetails.desiredInterestRate,
        desiredLoanTerm: formData.loanDetails.desiredLoanTerm,
        desiredRepayment: formData.loanDetails.desiredRepayment,
        subscribeRoadworthiness: formData.loanDetails.subscribeRoadworthiness,
        subscribeLicenceRenewal: formData.loanDetails.subscribeLicenceRenewal,
        feePaymentType: formData.loanDetails.feePaymentType,
        upfrontPayments: formData.loanDetails.upfrontPayments,
      },
      termsAndConditions: {
        consentCreditEnquiry: data.consentCreditEnquiry,
        acknowledgeFinanceApproval: data.acknowledgeFinanceApproval,
        agreeTermsAndPrivacy: data.agreeTermsAndPrivacy,
      },
    };

    console.log('Final Form Data for Backend:', finalData);
    toast({
      title: 'Success',
      description: 'Loan application submitted successfully! Check console for data.',
    });
    // alert("Loan application submitted successfully! Check console for data.")
  };

  const goBack = () => {
    setCurrentStep(3);
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg mb-8">
        <h2 className="text-xl font-semibold">Terms and Conditions & Consent</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Credit Enquiry Consent */}
        <div className="space-y-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            I hereby consent that Autobuy is allowed to make enquiries and access my credit
            information regarding my credit history with any credit bureau. I also consent to
            Autobuy sharing my credit information with their banking partners as required by law in
            order to finalize or fulfill my loan agreement as part of this application. I consent
            that Autobuy reports the conclusion of any credit agreement with me to the relevant
            credit reporting regulator. I hereby declare that the information provided by me is true
            and correct.
          </p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="true"
                {...register('consentCreditEnquiry', { required: 'Please provide your consent' })}
                className="w-4 h-4 text-blue-600 accent-blue-500"
              />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="false"
                {...register('consentCreditEnquiry', { required: 'Please provide your consent' })}
                className="w-4 h-4 text-blue-600 accent-blue-500"
              />
              <span className="text-sm">No</span>
            </label>
          </div>
          {errors.consentCreditEnquiry && (
            <span className="text-red-500 text-xs">{errors.consentCreditEnquiry.message}</span>
          )}
        </div>

        {/* Finance Approval Acknowledgment */}
        <div className="space-y-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            Finance is subject to an approval based on your credit profile and affordability of the
            vehicle. The submission of this finance application will not result in the immediate
            reservation of this vehicle, nor will it guarantee the availability of this vehicle in
            the future.
          </p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="true"
                {...register('acknowledgeFinanceApproval', {
                  required: 'Please acknowledge this statement',
                })}
                className="w-4 h-4 text-blue-600 accent-blue-500"
              />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="false"
                {...register('acknowledgeFinanceApproval', {
                  required: 'Please acknowledge this statement',
                })}
                className="w-4 h-4 text-blue-600 accent-blue-500"
              />
              <span className="text-sm">No</span>
            </label>
          </div>
          {errors.acknowledgeFinanceApproval && (
            <span className="text-red-500 text-xs">
              {errors.acknowledgeFinanceApproval.message}
            </span>
          )}
        </div>

        {/* Terms and Privacy Agreement */}
        <div className="space-y-4">
          <div className="text-gray-700 text-sm leading-relaxed">
            <p className="mb-2">I agree to the:</p>
            <p className="mb-1">
              (a) Terms and Conditions of the platform{' '}
              <a
                href="https://autobuyng.com/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                (https://autobuyng.com/terms-of-service)
              </a>
            </p>
            <p>
              (b) Privacy Policy of the platform{' '}
              <a
                href="https://autobuyng.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                (https://autobuyng.com/privacy-policy)
              </a>
            </p>
          </div>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="true"
                {...register('agreeTermsAndPrivacy', {
                  required: 'Please agree to the terms and privacy policy',
                })}
                className="w-4 h-4 text-blue-600 accent-blue-500"
              />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="false"
                {...register('agreeTermsAndPrivacy', {
                  required: 'Please agree to the terms and privacy policy',
                })}
                className="w-4 h-4 text-blue-600 accent-blue-500"
              />
              <span className="text-sm">No</span>
            </label>
          </div>
          {errors.agreeTermsAndPrivacy && (
            <span className="text-red-500 text-xs">{errors.agreeTermsAndPrivacy.message}</span>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={goBack}
            className="bg-gray-100 text-gray-700 px-8 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors border border-gray-300"
          >
            Previous
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors"
          >
            Finish
          </button>
        </div>
      </form>
    </div>
  );
}
