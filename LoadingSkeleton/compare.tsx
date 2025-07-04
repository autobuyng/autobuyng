"use client"

export default function CarCardSkeleton() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 min-w-[280px] animate-pulse">
      {/* Vehicle Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-5 w-5 bg-gray-300 rounded"></div>
      </div>

      {/* Change Vehicle Link */}
      <div className="h-3 bg-gray-300 rounded w-24 mb-4"></div>

      {/* Vehicle Image */}
      <div className="mb-4 bg-gray-300 rounded-lg h-[180px] w-full"></div>

      {/* Price and Mileage */}
      <div className="flex justify-between items-center mb-3">
        <div className="h-4 bg-gray-300 rounded w-16"></div>
        <div className="h-5 bg-gray-300 rounded w-24"></div>
      </div>

      {/* VIN */}
      <div className="mb-3 flex items-center gap-1">
        <div className="h-6 bg-gray-300 rounded w-8"></div>
        <div className="h-6 bg-gray-300 rounded w-32"></div>
      </div>

      {/* View Vehicle History */}
      <div className="h-3 bg-gray-300 rounded w-32 mb-5"></div>

      {/* Overview Section */}
      <div>
        <div className="h-5 bg-gray-300 rounded w-20 mb-4"></div>

        <div className="space-y-3">
          {/* Overview Items */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded">
              <div className="h-3 bg-gray-300 rounded w-20"></div>
              <div className="h-3 bg-gray-300 rounded w-16"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
