import { Card, CardContent } from '@/components/ui/card';

export function LoanVehicleSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Car Image Skeleton */}
      <div className="overflow-hidden">
        <div className="p-0">
          <div className="aspect-video bg-gray-200 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Car Details Skeleton */}
      <div className="space-y-4">
        {/* Car Title Skeleton */}
        <div className="h-8 bg-gray-200 rounded-md w-3/4" />

        {/* Price Skeleton */}
        <div className="h-10 bg-gray-200 rounded-md w-1/2" />

        {/* Payment Details Skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-24" />
            <div className="h-6 bg-gray-200 rounded w-32" />
          </div>

          <div className="space-y-1">
            <div className="h-8 bg-gray-200 rounded w-40" />
          </div>
        </div>
      </div>
    </div>
  );
}
