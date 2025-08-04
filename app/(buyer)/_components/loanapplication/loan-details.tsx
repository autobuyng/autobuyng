'use client';

import { useFormStore, type LoanDetails } from '@/store/loanStore';
import { useForm } from 'react-hook-form';
// import { useFormStore, type LoanDetails } from "@/store/form-store"

export default function LoanDetailsForm() {
  const { formData, updateLoanDetails, setCurrentStep } = useFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoanDetails>({
    defaultValues: formData.loanDetails,
  });

  // const desiredEquityContribution = watch("desiredEquityContribution")
  // const desiredInterestRate = watch("desiredInterestRate")

  const onNext = (data: LoanDetails) => {
    updateLoanDetails(data);
    setCurrentStep(4);
  };

  const goBack = () => {
    setCurrentStep(2);
    console.log("clicked")
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg mb-8">
        <h2 className="text-xl font-semibold">My Loan Preferences</h2>
      </div>

      <form onSubmit={handleSubmit(onNext)} className="space-y-6">
        {/* Main Loan Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="desiredEquityContribution"
              className="font-medium text-gray-700 mb-2 text-sm"
            >
              Desired Equity Contribution (₦)
            </label>
            <input
              id="desiredEquityContribution"
              type="number"
              min="0"
              // step="1000"
              {...register('desiredEquityContribution', {
                min: { value: 0, message: 'Amount must be positive' },
              })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                errors.desiredEquityContribution ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              placeholder="Enter amount"
            />
            {errors.desiredEquityContribution && (
              <span className="text-red-500 text-xs mt-1">
                {errors.desiredEquityContribution.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="desiredMonthlyPayment"
              className="font-medium text-gray-700 mb-2 text-sm"
            >
              Desired Monthly Payment (₦)
            </label>
            <select
              id="desiredMonthlyPayment"
              {...register('desiredMonthlyPayment', {
                required: 'Please select desired monthly payment',
              })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                errors.desiredMonthlyPayment ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            >
              <option value="">Select Payment Range</option>
              <option value="50000-100000">₦50,000 - ₦100,000</option>
              <option value="100000-200000">₦100,000 - ₦200,000</option>
              <option value="200000-300000">₦200,000 - ₦300,000</option>
              <option value="300000-500000">₦300,000 - ₦500,000</option>
              <option value="500000+">₦500,000+</option>
            </select>
            {errors.desiredMonthlyPayment && (
              <span className="text-red-500 text-xs mt-1">
                {errors.desiredMonthlyPayment.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="interestRateType" className="font-medium text-gray-700 mb-2 text-sm">
              Interest Rate Type
            </label>
            <select
              id="interestRateType"
              {...register('interestRateType', { required: 'Please select interest rate type' })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                errors.interestRateType ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            >
              <option value="">Select Rate Type</option>
              <option value="Fixed">Fixed Rate</option>
              <option value="Variable">Variable Rate</option>
              <option value="Hybrid">Hybrid Rate</option>
            </select>
            {errors.interestRateType && (
              <span className="text-red-500 text-xs mt-1">{errors.interestRateType.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="desiredInterestRate" className="font-medium text-gray-700 mb-2 text-sm">
              Desired Interest Rate (%)
            </label>
            <input
              id="desiredInterestRate"
              type="number"
              min="1"
              max="50"
              step="0.1"
              {...register('desiredInterestRate', {
                required: 'Interest rate is required',
                min: { value: 1, message: 'Minimum rate is 1%' },
                max: { value: 50, message: 'Maximum rate is 50%' },
              })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                errors.desiredInterestRate ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              placeholder="30"
            />
            {errors.desiredInterestRate && (
              <span className="text-red-500 text-xs mt-1">
                {errors.desiredInterestRate.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="desiredLoanTerm" className="font-medium text-gray-700 mb-2 text-sm">
              Desired Loan Term
            </label>
            <select
              id="desiredLoanTerm"
              {...register('desiredLoanTerm', { required: 'Please select loan term' })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                errors.desiredLoanTerm ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            >
              <option value="">Select Term</option>
              <option value="12 months">12 months</option>
              <option value="24 months">24 months</option>
              <option value="36 months">36 months</option>
              <option value="48 months">48 months</option>
              <option value="60 months">60 months</option>
              <option value="72 months">72 months</option>
            </select>
            {errors.desiredLoanTerm && (
              <span className="text-red-500 text-xs mt-1">{errors.desiredLoanTerm.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="desiredRepayment" className="font-medium text-gray-700 mb-2 text-sm">
              Desired Repayment
            </label>
            <select
              id="desiredRepayment"
              {...register('desiredRepayment', { required: 'Please select repayment method' })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                errors.desiredRepayment ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            >
              <option value="">Select Repayment</option>
              <option value="Monthly">Monthly</option>
              <option value="Bi-weekly">Bi-weekly</option>
              <option value="Weekly">Weekly</option>
              <option value="Quarterly">Quarterly</option>
            </select>
            {errors.desiredRepayment && (
              <span className="text-red-500 text-xs mt-1">{errors.desiredRepayment.message}</span>
            )}
          </div>
        </div>

        {/* Subscription Questions */}
        <div className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700 mb-4">
              Do you want to subscribe to roadworthiness for the full term of the loan? *
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="true"
                  {...register('subscribeRoadworthiness', { required: 'Please select an option' })}
                  className="w-4 h-4 text-blue-600 accent-blue-500"
                />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="false"
                  {...register('subscribeRoadworthiness', { required: 'Please select an option' })}
                  className="w-4 h-4 text-blue-600 accent-blue-500"
                />
                <span className="text-sm">No</span>
              </label>
            </div>
            {errors.subscribeRoadworthiness && (
              <span className="text-red-500 text-xs mt-1">
                {errors.subscribeRoadworthiness.message}
              </span>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-4">
              Do you want to subscribe to licence renewal for the full term of the loan? *
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="true"
                  {...register('subscribeLicenceRenewal', { required: 'Please select an option' })}
                  className="w-4 h-4 text-blue-600 accent-blue-500"
                />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="false"
                  {...register('subscribeLicenceRenewal', { required: 'Please select an option' })}
                  className="w-4 h-4 text-blue-600 accent-blue-500"
                />
                <span className="text-sm">No</span>
              </label>
            </div>
            {errors.subscribeLicenceRenewal && (
              <span className="text-red-500 text-xs mt-1">
                {errors.subscribeLicenceRenewal.message}
              </span>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-4">
              Do you want to pay for your fees upfront or monthly as part of your installment? *
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="UPFRONT"
                  {...register('feePaymentType', { required: 'Please select payment type' })}
                  className="w-4 h-4 text-blue-600 accent-blue-500"
                />
                <span className="text-sm">Upfront</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="MONTHLY"
                  {...register('feePaymentType', { required: 'Please select payment type' })}
                  className="w-4 h-4 text-blue-600 accent-blue-500"
                />
                <span className="text-sm">Monthly</span>
              </label>
            </div>
            {errors.feePaymentType && (
              <span className="text-red-500 text-xs mt-1">{errors.feePaymentType.message}</span>
            )}
          </div>
        </div>

        {/* Upfront Payment Options */}
        <div>
          <label className="block font-medium text-gray-700 mb-4">
            Do you want to pay for any of the following items upfront instead of financing it as
            part of the loan?
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register('upfrontPayments.vehicleRegistration')}
                className="w-4 h-4 text-blue-600 rounded accent-blue-500"
              />
              <span className="text-sm">Vehicle Registration</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register('upfrontPayments.vehicleTracking')}
                className="w-4 h-4 text-blue-600 rounded accent-blue-500"
              />
              <span className="text-sm">Vehicle Tracking</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register('upfrontPayments.creditLifeInsurance')}
                className="w-4 h-4 text-blue-600 rounded accent-blue-500"
              />
              <span className="text-sm">Credit Life Insurance</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register('upfrontPayments.insuranceFirst12Months')}
                className="w-4 h-4 text-blue-600 rounded accent-blue-500"
              />
              <span className="text-sm">Insurance (First 12 months)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register('upfrontPayments.warranty')}
                className="w-4 h-4 text-blue-600 rounded accent-blue-500"
              />
              <span className="text-sm">Warranty</span>
            </label>
          </div>
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
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
