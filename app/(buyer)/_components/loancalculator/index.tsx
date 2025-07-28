'use client';

import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { useGetLoanEstimate } from '../../api/payment';
import { usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';

export default function LoanCalculator() {
  const [carValue, setCarValue] = useState(13000000);
  const pathname = usePathname();
  const router = useRouter();
  const [loanTerm, setLoanTerm] = useState(6);
  const [depositPercentage, setDepositPercentage] = useState(50);
  const { getLoanEstimate, isPending } = useGetLoanEstimate();
  const vehicleId = pathname.split('/').at(-1)!;
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null); (null);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace('NGN', '₦');
  };

  const depositAmount = (carValue * depositPercentage) / 100;
  // const loanAmount = carValue - depositAmount;

  // Simple calculation for monthly payment (this would be more complex in reality)
  // const monthsMap: { [key: string]: number } = {
  //   '6 Months': 6,
  //   '12 Months': 12,
  //   '24 Months': 24,
  //   '36 Months': 36,
  // };

  // const months = monthsMap[loanTerm] || 6;
  // const monthlyPayment = loanAmount / months;

  const handleGetEstimate = async () => {
    try {
      const res = await getLoanEstimate({
        vehicleId,
        downPayment: depositAmount,
        loanTermMonths: loanTerm,
        annualInterestRate: 0.4,
      });
      setMonthlyPayment(res.data.emi)
      console.log(res, 'res');
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <div className=" mt-4 flex items-center justify-center">
      <div className="w-full  bg-primary-100 rounded-3xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Loan Calculator</h1>

        <div className="bg-white rounded-2xl p-6 mb-6">
          <div className="flex gap-2">
            <div className="mb-6 w-full">
              <label className="block text-sm font-medium text-gray-600 mb-2">Car Value</label>
              <input
                type="text"
                value={formatCurrency(carValue)}
                onChange={(e) => {
                  const value = e.target.value.replace(/[₦,\s]/g, '');
                  const numValue = Number.parseInt(value) || 0;
                  setCarValue(numValue);
                }}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6 w-full">
              <label className=" w-full block text-sm font-medium text-gray-600 mb-2">
                Loan Term
              </label>
              <div className="relative w-full">
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value={6}>6 Months</option>
                  <option value={12}>12 Months</option>
                  <option value={18}> 24 Months</option>
                  <option value={24}>36 Months</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-600">Deposit Payment</label>
              <div className="flex items-center gap-4">
                <span className="text-blue-600 font-semibold">{depositPercentage}%</span>
                <span className="font-semibold text-gray-800">{formatCurrency(depositAmount)}</span>
              </div>
            </div>

            <div className="relative mb-2">
              <Slider
                onValueChange={(input) => {
                  const Value = input[0];
                  setDepositPercentage(Value);
                }}
                value={[depositPercentage]}
                max={70}
                min={30}
                step={1}
              />
            </div>

            <div className="flex justify-between text-xs text-gray-500">
              <span>Min 30% of car value</span>
              <span>Max 70% of car value</span>
            </div>
          </div>

          <button
            onClick={handleGetEstimate}
            className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            {isPending ? <Loader2 className="animate-spin mx-auto w-full " /> : 'Calculatte'}
          </button>
        </div>

        <div className="mb-6 text-xs text-gray-700 leading-relaxed">
          <span className="font-semibold">Please note:</span> Actual loan terms, rates, and
          approvals are determined by our lending partners and dealers. Estimates provided are for
          informational purposes only and may not include additional fees such as title,
          registration, or taxes. Final terms may vary based on your credit profile and lender
          requirements.
        </div>

        {monthlyPayment && 
          <div className="bg-white rounded-2xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-blue-600 font-medium mb-1">Estimated Monthly Payment</p>
                <p className="text-2xl font-bold text-gray-800">
                  {monthlyPayment?.toLocaleString('en-NG', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <button
                onClick={() => router.push(`/loan-vehicle/${vehicleId}`)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200"
              >
                Apply for loan
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
