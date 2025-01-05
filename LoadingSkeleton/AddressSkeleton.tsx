export default function AddressListSkeleton() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="h-6 bg-gray-200 rounded w-32 animate-pulse" />
        <div className="h-5 bg-blue-100 rounded w-16 animate-pulse" />
      </div>

      {/* Address Items */}
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="flex justify-between items-center p-4 border rounded-lg bg-white"
        >
          <div className="h-5 bg-gray-200 rounded w-40 animate-pulse" />
          <div className="h-5 bg-gray-200 rounded w-12 animate-pulse" />
        </div>
      ))}

      {/* Add New Address Button */}
      <div className="mt-6">
        <div className="h-10 bg-blue-100 rounded-lg w-full max-w-[200px] animate-pulse" />
      </div>
    </div>
  );
}

export function DeliveryDetailsSkeleton() {
  return (
    <div className="w-full max-w-xl p-4 space-y-6">
      {/* Header */}
      <div className="h-5 bg-gray-200 rounded w-32 animate-pulse" />

      {/* Pickup Option */}
      <div className="border rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-blue-100 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
        </div>
        <div className="pl-7">
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
          <div className="h-3 bg-gray-100 rounded w-48 mt-1 animate-pulse" />
        </div>
      </div>

      {/* Door Delivery Option */}
      <div className="border rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-gray-200 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
        </div>
        <div className="pl-7">
          <div className="h-4 bg-gray-200 rounded w-36 animate-pulse" />
          <div className="h-3 bg-gray-100 rounded w-48 mt-1 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
