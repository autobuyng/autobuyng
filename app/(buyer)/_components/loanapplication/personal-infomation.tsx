"use client"

import { useFormStore, type PersonalInformation } from "@/store/loanStore"
import { useForm } from "react-hook-form"
// import { useFormStore, type PersonalInformation } from "@/store/form-store"

export default function PersonalInformationForm() {
  const { formData, updatePersonalInformation, setCurrentStep } = useFormStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInformation>({
    defaultValues: formData.personalInformation,
  })

  const onNext = (data: PersonalInformation) => {
    updatePersonalInformation(data)
    setCurrentStep(2)
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Personal Information</h2>
        <p className="text-gray-600 text-sm">
          Please provide your personal details to continue with your loan application.
        </p>
      </div>

      <form onSubmit={handleSubmit(onNext)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="font-medium text-gray-700 mb-2 text-sm">
              First Name *
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.firstName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="font-medium text-gray-700 mb-2 text-sm">
              Last Name *
            </label>
            <input
              id="lastName"
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.lastName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium text-gray-700 mb-2 text-sm">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="font-medium text-gray-700 mb-2 text-sm">
              Phone Number *
            </label>
            <input
              id="phoneNumber"
              type="tel"
              {...register("phoneNumber", { required: "Phone number is required" })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="dateOfBirth" className="font-medium text-gray-700 mb-2 text-sm">
              Date of Birth *
            </label>
            <input
              id="dateOfBirth"
              type="date"
              {...register("dateOfBirth", { required: "Date of birth is required" })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.dateOfBirth && <span className="text-red-500 text-xs mt-1">{errors.dateOfBirth.message}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="nationalId" className="font-medium text-gray-700 mb-2 text-sm">
              National ID *
            </label>
            <input
              id="nationalId"
              type="text"
              {...register("nationalId", { required: "National ID is required" })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.nationalId ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.nationalId && <span className="text-red-500 text-xs mt-1">{errors.nationalId.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="address" className="font-medium text-gray-700 mb-2 text-sm">
              Address *
            </label>
            <input
              id="address"
              type="text"
              {...register("address", { required: "Address is required" })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.address ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.address && <span className="text-red-500 text-xs mt-1">{errors.address.message}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="font-medium text-gray-700 mb-2 text-sm">
              City *
            </label>
            <input
              id="city"
              type="text"
              {...register("city", { required: "City is required" })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.city ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.city && <span className="text-red-500 text-xs mt-1">{errors.city.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="state" className="font-medium text-gray-700 mb-2 text-sm">
              State *
            </label>
            <input
              id="state"
              type="text"
              {...register("state", { required: "State is required" })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.state ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.state && <span className="text-red-500 text-xs mt-1">{errors.state.message}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="postalCode" className="font-medium text-gray-700 mb-2 text-sm">
              Postal Code *
            </label>
            <input
              id="postalCode"
              type="text"
              {...register("postalCode", { required: "Postal code is required" })}
              className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.postalCode ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.postalCode && <span className="text-red-500 text-xs mt-1">{errors.postalCode.message}</span>}
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  )
}
