'use client';

import { useForm } from 'react-hook-form';
import { useFormStore, type FinancialInformation } from '@/store/loanStore';

export default function FinancialInformationForm() {
  const { formData, updateFinancialInformation, setCurrentStep } = useFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FinancialInformation>({
    defaultValues: formData.financialInformation,
  });

  const onNext = (data: FinancialInformation) => {
    updateFinancialInformation(data);
    setCurrentStep(4);
  };

  const goBack = () => {
    setCurrentStep(2);
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Financial Information</h2>
        <p className="text-gray-600 text-sm">
          Please provide your financial details to help us assess your loan application.
        </p>
      </div>

      <form onSubmit={handleSubmit(onNext)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="monthlyExpenses" className="font-medium text-gray-700 mb-2 text-sm">
              Monthly Expenses ($) *
            </label>
            <input
              id="monthlyExpenses"
              type="number"
              min="0"
              step="0.01"
              {...register('monthlyExpenses', {
                required: 'Monthly expenses is required',
                min: { value: 0, message: 'Expenses must be positive' },
              })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                errors.monthlyExpenses ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.monthlyExpenses && (
              <span className="text-red-500 text-xs mt-1">{errors.monthlyExpenses.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="existingLoans" className="font-medium text-gray-700 mb-2 text-sm">
              Existing Loans ($)
            </label>
            <input
              id="existingLoans"
              type="number"
              min="0"
              step="0.01"
              {...register('existingLoans', {
                min: { value: 0, message: 'Amount must be positive' },
              })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                errors.existingLoans ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.existingLoans && (
              <span className="text-red-500 text-xs mt-1">{errors.existingLoans.message}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="bankName" className="font-medium text-gray-700 mb-2 text-sm">
            Bank Name *
          </label>
          <input
            id="bankName"
            type="text"
            {...register('bankName', { required: 'Bank name is required' })}
            className={`px-3 py-2 border rounded-md text-sm transition-colors ${
              errors.bankName ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
          />
          {errors.bankName && (
            <span className="text-red-500 text-xs mt-1">{errors.bankName.message}</span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="accountNumber" className="font-medium text-gray-700 mb-2 text-sm">
              Account Number *
            </label>
            <input
              id="accountNumber"
              type="text"
              {...register('accountNumber', { required: 'Account number is required' })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                errors.accountNumber ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.accountNumber && (
              <span className="text-red-500 text-xs mt-1">{errors.accountNumber.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="accountType" className="font-medium text-gray-700 mb-2 text-sm">
              Account Type *
            </label>
            <select
              id="accountType"
              {...register('accountType', { required: 'Account type is required' })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                errors.accountType ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            >
              <option value="Savings">Savings</option>
              <option value="Checking">Checking</option>
            </select>
            {errors.accountType && (
              <span className="text-red-500 text-xs mt-1">{errors.accountType.message}</span>
            )}
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
