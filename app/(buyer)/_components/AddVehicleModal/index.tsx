"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { EnhancedSearchableDropdown } from "@/components/SearchableDropdown/SearchableDropdown"
import { BODY_STYLE, CAR_BRANDS, YEAR } from "@/constants/constants"
import { useStore } from "@/store/useStore"
import { Model, SearchQuery } from "@/types/types"
import { useSearchVehicle } from "../../api/search"
import { useGetVehicleModel } from "@/app/(seller)/api/upload"

export default function AddVehicleModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const { setCompareSearchResult } = useStore()
  const [bodyType, setBodyType] = useState("")
  const [year, setYear] = useState("")
  const [make, setMake] = useState("")
  const [vehicleModel, setVehicleModel] = useState("")
  const [updateModelList, setUpdateModelList] = useState<{
    id: number;
    label: string;
    name: string;
  }[]>([])
  const { search, isPending, } = useSearchVehicle();
  const { model } = useGetVehicleModel({ make: make });
  console.log(updateModelList, "model")


  useEffect(() => {
    if (model) {
      const updateModel = model.map((item: Model) => ({
        id: item.id,
        label: item.name,
        name: item.name
      }))
      setUpdateModelList(updateModel)
    }
  }, [model])

  const handleSearch = async (data: SearchQuery) => {
    try {
      const response = await search(data);
      setCompareSearchResult(response.data.vehicles?.[0]);
      setIsOpen(false)
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex items-center justify-center bg-gray-100">
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="max-w-[90%] sm:max-w-md p-0 gap-0">
          <div className="relative">
            <AlertDialogHeader className="px-6 pt-4 pb-4 text-center">
              <AlertDialogTitle className="text-2xl text-center font-semibold text-blue-600">Add Vehicle</AlertDialogTitle>
              <AlertDialogDescription className="sr-only">Add a new vehicle to your account</AlertDialogDescription>
            </AlertDialogHeader>

            <div className="px-6 pb-4 space-y-3">
              <div className="space-y-2">
                <label htmlFor="body-type" className="text-sm font-medium text-gray-900">
                  Body Type
                </label>
                <EnhancedSearchableDropdown
                  options={BODY_STYLE}
                  placeholder="Select vehicle make"
                  onChange={(input) => {
                    setBodyType(input)
                  }}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="make" className="text-sm font-medium text-gray-900">
                  Make
                </label>
                <EnhancedSearchableDropdown
                  options={CAR_BRANDS}
                  placeholder="Select vehicle make"
                  onChange={(input) => {
                    setMake(input)
                  }}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="model" className="text-sm font-medium text-gray-900">
                  Model
                </label>
                <EnhancedSearchableDropdown
                  options={updateModelList}
                  placeholder="Select vehicle make"
                  onChange={(input) => {
                    setVehicleModel(input)
                  }}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="year" className="text-sm font-medium text-gray-900">
                  Year
                </label>
                <EnhancedSearchableDropdown
                  options={YEAR}
                  placeholder="select year"
                  onChange={(input) => {
                    setYear(input)
                  }}
                />
              </div>

              <AlertDialogFooter className="px-0 pt-4 flex items-center gap-4">
                <Button
                  onClick={() => handleSearch({
                    vehicleType: bodyType,
                    yearMax: year,
                    yearMin: year,
                    make,
                    vehicleModel
                  })}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
                >
                  {isPending ? "Adding..." : "Add Vehicle"}
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-white  text-blue-500 border py-3 rounded-lg font-medium"
                >
                  Cancel
                </Button>
              </AlertDialogFooter>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
