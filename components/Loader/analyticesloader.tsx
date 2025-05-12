export default function StatsSkeletonLoader() {
  return (
    <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-8 lg:grid-cols-4">
      {/* TOTAL UPLOAD Skeleton */}
      <div className="bg-white rounded-lg p-6 shadow-sm flex-1 gap-2">
        <div className="flex justify-between items-start">
          <div className="animate-pulse h-5 w-32 bg-gray-200 rounded mb-6"></div>
          <div className="animate-pulse w-8 h-8 rounded-full bg-blue-100"></div>
        </div>
        <div className="animate-pulse h-8 w-24 bg-gray-200 rounded mb-3"></div>
        <div className="animate-pulse h-5 w-24 bg-gray-200 rounded"></div>
      </div>

      {/* TOTAL SALE Skeleton */}
      <div className="bg-white rounded-lg p-6 shadow-sm flex-1 gap-2 ">
        <div className="flex justify-between items-start">
          <div className="animate-pulse h-5 w-28 bg-gray-200 rounded mb-6"></div>
          <div className="animate-pulse w-8 h-8 rounded-full bg-green-100"></div>
        </div>
        <div className="animate-pulse h-8 w-24 bg-gray-200 rounded mb-3"></div>
        <div className="animate-pulse h-5 w-24 bg-gray-200 rounded"></div>
      </div>

      {/* TOTAL APPROVED Skeleton */}
      <div className="bg-white rounded-lg p-6 shadow-sm flex-1 gap-2">
        <div className="flex justify-between items-start">
          <div className="animate-pulse h-5 w-24 bg-gray-200 rounded mb-6"></div>
          <div className="animate-pulse w-8 h-8 rounded-full bg-gray-100"></div>
        </div>
        <div className="animate-pulse h-8 w-24 bg-gray-200 rounded mb-3"></div>
        <div className="animate-pulse h-5 w-24 bg-gray-200 rounded"></div>
      </div>

      {/* TOTAL AMOUNT TRADED Skeleton */}
      <div className="bg-white rounded-lg p-6 shadow-sm flex-1 gap-2">
        <div className="flex justify-between items-start">
          <div className="animate-pulse h-5 w-24 bg-gray-200 rounded mb-6"></div>
          <div className="animate-pulse w-8 h-8 rounded-full bg-red-100"></div>
        </div>
        <div className="animate-pulse h-8 w-24 bg-gray-200 rounded mb-3"></div>
        <div className="animate-pulse h-5 w-24 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}
