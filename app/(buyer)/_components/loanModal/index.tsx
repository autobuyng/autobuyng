'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { X } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { VehicleData } from '@/types/types';
import { useRouter } from 'next-nprogress-bar';

export default function LoanPaymentDialog({
  data,
  isOpen,
  setIsOpen,
  vehicleData,
}: {
  data: any;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  vehicleData: VehicleData | null;
}) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="max-w-md p-0 overflow-hidden">
          <div className="relative p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <AlertDialogHeader className="space-y-4 text-left">
              <AlertDialogTitle className="text-lg font-semibold text-gray-900">
                Estimated Monthly Payment
              </AlertDialogTitle>

              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{formatCurrency(data?.emi)}</div>
              </div>
            </AlertDialogHeader>

            <div className="space-y-4 mt-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Car Value</span>
                <span className="text-sm font-semibold text-gray-900">
                  {formatCurrency(vehicleData?.price)}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Down Payment</span>
                <span className="text-sm font-semibold text-gray-900">
                  {formatCurrency(data?.downPayment)}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Loan Tenure</span>
                <span className="text-sm font-semibold text-gray-900">
                  {data?.loanTermMonths} Months
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                Monthly Installment Includes
              </h3>
              <AlertDialogDescription className="text-xs text-gray-600 leading-relaxed">
                Vehicle Registration, Comprehensive Insurance, Annual Maintenance Cost, Tracker,
                Credit Life Insurance, Roadworthiness, Vehicle Licence Renewal.
              </AlertDialogDescription>
            </div>

            <AlertDialogFooter className="mt-6 px-0">
              <AlertDialogAction
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg"
                onClick={() => {
                  router.push(`/loan-vehicle/${vehicleData?._id}`);
                  setIsOpen(false);
                }}
              >
                Apply for loan
              </AlertDialogAction>
            </AlertDialogFooter>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
