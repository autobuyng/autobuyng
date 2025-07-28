'use client';

import { useFormStore, type EmploymentInformation } from '@/store/loanStore';
import { useForm } from 'react-hook-form';
// import { useFormStore, type EmploymentInformation } from "@/store/form-store"

export default function EmploymentInformationForm() {
  const { formData, updateEmploymentInformation, setCurrentStep } = useFormStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EmploymentInformation>({
    defaultValues: formData.employmentInformation,
  });

  // const profession = watch("profession")
  const hasSideBusiness = watch('hasSideBusiness');

  const onNext = (data: EmploymentInformation) => {
    updateEmploymentInformation(data);
    setCurrentStep(3);
  };

  const goBack = () => {
    setCurrentStep(1);
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg mb-8">
        <h2 className="text-xl font-semibold">My Profession</h2>
      </div>

      <form onSubmit={handleSubmit(onNext)} className="space-y-8">
        <div>
          <label className="block font-medium text-gray-700 mb-4">What is your profession?</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="SALARY_EARNER"
                {...register('profession', { required: 'Please select your profession' })}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm">Salary Earner</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="BUSINESS_OWNER"
                {...register('profession', { required: 'Please select your profession' })}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm">Business Owner</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="SELF_EMPLOYED"
                {...register('profession', { required: 'Please select your profession' })}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm">Self Employed</span>
            </label>
          </div>
          {errors.profession && (
            <span className="text-red-500 text-xs mt-1">{errors.profession.message}</span>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Employment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="employmentType" className="font-medium text-gray-700 mb-2 text-sm">
                Employment Type *
              </label>
              <select
                id="employmentType"
                {...register('employmentType', { required: 'Employment type is required' })}
                className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                  errors.employmentType ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              >
                <option value="">Select Employment Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Freelance</option>
              </select>
              {errors.employmentType && (
                <span className="text-red-500 text-xs mt-1">{errors.employmentType.message}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="industry" className="font-medium text-gray-700 mb-2 text-sm">
                Industry *
              </label>
              <select
                id="industry"
                {...register('industry', { required: 'Industry is required' })}
                className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                  errors.industry ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              >
                <option value="">Select Industry</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Other">Other</option>
              </select>
              {errors.industry && (
                <span className="text-red-500 text-xs mt-1">{errors.industry.message}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="employerName" className="font-medium text-gray-700 mb-2 text-sm">
                Name Of Employer *
              </label>
              <input
                id="employerName"
                type="text"
                {...register('employerName', { required: 'Employer name is required' })}
                className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                  errors.employerName ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              {errors.employerName && (
                <span className="text-red-500 text-xs mt-1">{errors.employerName.message}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="employerAddress" className="font-medium text-gray-700 mb-2 text-sm">
                Employers Address *
              </label>
              <input
                id="employerAddress"
                type="text"
                {...register('employerAddress', { required: 'Employer address is required' })}
                className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                  errors.employerAddress ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              {errors.employerAddress && (
                <span className="text-red-500 text-xs mt-1">{errors.employerAddress.message}</span>
              )}
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="yearsWithEmployer" className="font-medium text-gray-700 mb-2 text-sm">
                Years With Employer *
              </label>
              <input
                id="yearsWithEmployer"
                type="date"
                {...register('yearsWithEmployer', { required: 'Years with employer is required' })}
                className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                  errors.yearsWithEmployer ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              {errors.yearsWithEmployer && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.yearsWithEmployer.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Side Business */}
        <div>
          <label className="block font-medium text-gray-700 mb-4">
            Do you have a Side Business? *
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="true"
                {...register('hasSideBusiness', { required: 'Please select an option' })}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="false"
                {...register('hasSideBusiness', { required: 'Please select an option' })}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm">No</span>
            </label>
          </div>
          {errors.hasSideBusiness && (
            <span className="text-red-500 text-xs mt-1">{errors.hasSideBusiness.message}</span>
          )}
        </div>

        {/* Business Details - Show only if has side business */}
        {hasSideBusiness && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="businessName" className="font-medium text-gray-700 mb-2 text-sm">
                  Name Of Business *
                </label>
                <input
                  id="businessName"
                  type="text"
                  {...register('businessName', {
                    required: hasSideBusiness ? 'Business name is required' : false,
                  })}
                  className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                    errors.businessName ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                />
                {errors.businessName && (
                  <span className="text-red-500 text-xs mt-1">{errors.businessName.message}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="businessRegNumber"
                  className="font-medium text-gray-700 mb-2 text-sm"
                >
                  Business Reg. Number *
                </label>
                <input
                  id="businessRegNumber"
                  type="text"
                  {...register('businessRegNumber', {
                    required: hasSideBusiness ? 'Business registration number is required' : false,
                  })}
                  className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                    errors.businessRegNumber ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                />
                {errors.businessRegNumber && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.businessRegNumber.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="businessType" className="font-medium text-gray-700 mb-2 text-sm">
                  Business Type *
                </label>
                <select
                  id="businessType"
                  {...register('businessType', {
                    required: hasSideBusiness ? 'Business type is required' : false,
                  })}
                  className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                    errors.businessType ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                >
                  <option value="">Select Business Type</option>
                  <option value="Sole Proprietorship">Sole Proprietorship</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Limited Liability Company">Limited Liability Company</option>
                  <option value="Corporation">Corporation</option>
                </select>
                {errors.businessType && (
                  <span className="text-red-500 text-xs mt-1">{errors.businessType.message}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="directorsBVN" className="font-medium text-gray-700 mb-2 text-sm">
                  Directors BVN *
                </label>
                <input
                  id="directorsBVN"
                  type="text"
                  {...register('directorsBVN', {
                    required: hasSideBusiness ? 'Directors BVN is required' : false,
                  })}
                  className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                    errors.directorsBVN ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                />
                {errors.directorsBVN && (
                  <span className="text-red-500 text-xs mt-1">{errors.directorsBVN.message}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="directorsFirstName"
                  className="font-medium text-gray-700 mb-2 text-sm"
                >
                  Directors First Name *
                </label>
                <input
                  id="directorsFirstName"
                  type="text"
                  {...register('directorsFirstName', {
                    required: hasSideBusiness ? 'Directors first name is required' : false,
                  })}
                  className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                    errors.directorsFirstName ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                />
                {errors.directorsFirstName && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.directorsFirstName.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="directorsLastName"
                  className="font-medium text-gray-700 mb-2 text-sm"
                >
                  Directors Last Name *
                </label>
                <input
                  id="directorsLastName"
                  type="text"
                  {...register('directorsLastName', {
                    required: hasSideBusiness ? 'Directors last name is required' : false,
                  })}
                  className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                    errors.directorsLastName ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                />
                {errors.directorsLastName && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.directorsLastName.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Expenses Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="totalMonthlyExpenses"
                className="font-medium text-gray-700 mb-2 text-sm"
              >
                Total Monthly Expenses (₦) *
              </label>
              <input
                id="totalMonthlyExpenses"
                type="number"
                min="0"
                step="0.01"
                {...register('totalMonthlyExpenses', {
                  required: 'Total monthly expenses is required',
                  min: { value: 0, message: 'Amount must be positive' },
                })}
                className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                  errors.totalMonthlyExpenses ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              {errors.totalMonthlyExpenses && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.totalMonthlyExpenses.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="totalTakeHomePay" className="font-medium text-gray-700 mb-2 text-sm">
                Total Take-Home Pay (After Expenses) (₦) *
              </label>
              <input
                id="totalTakeHomePay"
                type="number"
                min="0"
                step="0.01"
                {...register('totalTakeHomePay', {
                  required: 'Total take-home pay is required',
                  min: { value: 0, message: 'Amount must be positive' },
                })}
                className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                  errors.totalTakeHomePay ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              {errors.totalTakeHomePay && (
                <span className="text-red-500 text-xs mt-1">{errors.totalTakeHomePay.message}</span>
              )}
            </div>
          </div>
        </div>

        {/* Vehicle Purpose */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Purpose</h3>
          <label className="block font-medium text-gray-700 mb-4">
            What will the vehicle be used for? *
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="PERSONAL"
                {...register('vehiclePurpose', { required: 'Please select vehicle purpose' })}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm">Personal</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="BUSINESS"
                {...register('vehiclePurpose', { required: 'Please select vehicle purpose' })}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm">Business</span>
            </label>
          </div>
          {errors.vehiclePurpose && (
            <span className="text-red-500 text-xs mt-1">{errors.vehiclePurpose.message}</span>
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
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
