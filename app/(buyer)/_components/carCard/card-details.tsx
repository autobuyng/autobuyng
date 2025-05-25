"use client"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
import { OrderDetails } from "@/types/types"

interface PurchaseDetailsProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  car: OrderDetails
}

export default function PurchaseDetailsDialog({ isOpen, onOpenChange, car }: PurchaseDetailsProps) {
  console.log(isOpen, "open")
  const purchase = {
    carName: "Mercedes Benz CLA300",
    orderNumber: "#292360137091",
    price: "₦3,000,000",
    shippingAddress: "3517 W. Gray St. Utica, Pennsylvania 57867",
    carImage: "/placeholder.svg?height=200&width=300",
    carDetails: {
      vin: "0177279F54",
      exteriorColor: "Black",
      fuelType: "PMS",
      transmission: "Automatic",
      mileage: "23,000mi",
    },
    orderStatus: {
      orderPlaced: { date: "Nov 14", completed: true },
      processing: { date: "Nov 14", completed: true },
      shipped: { date: "Nov 14", completed: true },
      delivered: { date: "Nov 14", completed: true },
    },
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="p-6 pb-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-blue-600 text-xl font-medium">Details of your purchase</DialogTitle>
            {/* <DialogClose className="h-6 w-6 rounded-full text-gray-500 hover:text-gray-700">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose> */}
          </div>
        </DialogHeader>

        <div className="p-6 pt-2">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{car.vehicleId.make}</h2>
            <div className="text-gray-500 text-sm">Order Number: {car._id}</div>
          </div>

          <div className="text-3xl font-bold mb-4">{car.vehicleId.price}</div>

          <div className="mb-6">
            <div className="text-gray-500 text-sm">Ships to:</div>
            <div>{purchase.shippingAddress}</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="sm:w-1/2">
              <Image
                src={car.vehicleId.exteriorImages?.[0] as string}
                alt={purchase.carName}
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="sm:w-1/2 space-y-3">
              <div>
                <span className="font-semibold">VIN:</span> {car.vehicleId.vin}
              </div>
              <div>
                <span className="font-semibold">Exterior Color:</span> {car.vehicleId.exteriorColor}
              </div>
              <div>
                <span className="font-semibold">Fuel Type:</span> {car.vehicleId.fuelType}
              </div>
              <div>
                <span className="font-semibold">Transmission:</span> {car.vehicleId.transmission}
              </div>
              <div>
                <span className="font-semibold">Mileage:</span> {car.vehicleId.mileage}
              </div>
            </div>
          </div>

          {/* Order Status Tracker */}
          <div className="mt-8">
            <div className="grid grid-cols-4 gap-2 mb-2">
              <div className="text-center text-sm font-medium">Order Placed</div>
              <div className="text-center text-sm font-medium">Processing</div>
              <div className="text-center text-sm font-medium">Shipped</div>
              <div className="text-center text-sm font-medium">Delivered</div>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="text-center text-sm text-gray-500">{purchase.orderStatus.orderPlaced.date}</div>
              <div className="text-center text-sm text-gray-500">{purchase.orderStatus.processing.date}</div>
              <div className="text-center text-sm text-gray-500">{purchase.orderStatus.shipped.date}</div>
              <div className="text-center text-sm text-gray-500">{purchase.orderStatus.delivered.date}</div>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-100 -translate-y-1/2"></div>
              <div
                className="absolute top-1/2 left-0 right-0 h-1 bg-blue-600 -translate-y-1/2"
                style={{ width: "100%" }}
              ></div>

              <div className="relative flex justify-between">
                <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
