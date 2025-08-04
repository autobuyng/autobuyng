"use client"

import { useFormStore, type EmploymentInformation } from "@/store/loanStore"
import { useForm } from "react-hook-form"
// import { useFormStore, type EmploymentInformation } from "@/store/form-store"

export default function EmploymentInformationForm() {
  const { formData, updateEmploymentInformation, setCurrentStep } = useFormStore()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EmploymentInformation>({
    defaultValues: formData.employmentInformation,
  })

  const profession = watch("profession")
  const hasSideBusiness = watch("hasSideBusiness") === "true"
  const hasBusinessBankAccount = watch("hasBusinessBankAccount") === "true"
  const isDirector = watch("isDirector") === "true"

  const onNext = (data: EmploymentInformation) => {
    updateEmploymentInformation(data)
    setCurrentStep(3)
  }

  const goBack = () => {
    setCurrentStep(1)
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg mb-8">
        <h2 className="text-xl font-semibold">My Profession</h2>
      </div>

      <form onSubmit={handleSubmit(onNext)} className="space-y-8">
        {/* Profession Selection */}
        <div>
          <label className="block font-medium text-gray-700 mb-4">What is your profession?</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="SALARY_EARNER"
                {...register("profession", { required: "Please select your profession" })}
                className="w-4 h-4 text-blue-600 accent-blue-500"
              />
              <span className="text-sm">Salary Earner</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="BUSINESS_OWNER"
                {...register("profession", { required: "Please select your profession" })}
                className="w-4 h-4 text-blue-600 accent-blue-500"
              />
              <span className="text-sm">Business Owner</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="SELF_EMPLOYED"
                {...register("profession", { required: "Please select your profession" })}
                className="w-4 h-4 text-blue-600 accent-blue-500"
              />
              <span className="text-sm">Self Employed</span>
            </label>
          </div>
          {errors.profession && <span className="text-red-500 text-xs mt-1">{errors.profession.message}</span>}
        </div>

        {/* Salary Earner Form */}
        {profession === "SALARY_EARNER" && (
          <>
            {/* Employment Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Employment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="employmentType" className="font-medium text-gray-700 mb-2 text-sm">
                    Employment Type *
                  </label>
                  <select
                    id="employmentType"
                    {...register("employmentType", {
                      required: profession === "SALARY_EARNER" ? "Employment type is required" : false,
                    })}
                    className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.employmentType ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  >
                    <option value="">Select Employment Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                  {errors.employmentType && (
                    <span className="text-red-500 text-xs mt-1">{errors.employmentType.message}</span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="industry" className="font-medium text-gray-700 mb-2 text-sm">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    {...register("industry", {
                      required: profession === "SALARY_EARNER" ? "Industry is required" : false,
                    })}
                    className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.industry ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  >
                    <option value="">Select Industry</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Retail">Retail</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.industry && <span className="text-red-500 text-xs mt-1">{errors.industry.message}</span>}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="employerName" className="font-medium text-gray-700 mb-2 text-sm">
                    Name Of Employer *
                  </label>
                  <input
                    id="employerName"
                    type="text"
                    {...register("employerName", {
                      required: profession === "SALARY_EARNER" ? "Employer name is required" : false,
                    })}
                    className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.employerName ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  />
                  {errors.employerName && (
                    <span className="text-red-500 text-xs mt-1">{errors.employerName.message}</span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="employerAddress" className="font-medium text-gray-700 mb-2 text-sm">
                    Employers Address *
                  </label>
                  <input
                    id="employerAddress"
                    type="text"
                    {...register("employerAddress", {
                      required: profession === "SALARY_EARNER" ? "Employer address is required" : false,
                    })}
                    className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.employerAddress ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  />
                  {errors.employerAddress && (
                    <span className="text-red-500 text-xs mt-1">{errors.employerAddress.message}</span>
                  )}
                </div>

                <div className="flex flex-col ">
                  <label htmlFor="yearsWithEmployer" className="font-medium text-gray-700 mb-2 text-sm">
                    Years With Employer *
                  </label>
                  <input
                    id="yearsWithEmployer"
                    type="text"
                    {...register("yearsWithEmployer", {
                      required: profession === "SALARY_EARNER" ? "Years with employer is required" : false,
                    })}
                    className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.yearsWithEmployer ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  />
                  {errors.yearsWithEmployer && (
                    <span className="text-red-500 text-xs mt-1">{errors.yearsWithEmployer.message}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Side Business Question */}
            <div>
              <label className="block font-medium text-gray-700 mb-4">Do you have a Side Business? *</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="true"
                    {...register("hasSideBusiness", {
                      required: profession === "SALARY_EARNER" ? "Please select an option" : false,
                    })}
                    className="w-4 h-4 text-blue-600 accent-blue-500"
                  />
                  <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="false"
                    {...register("hasSideBusiness", {
                      required: profession === "SALARY_EARNER" ? "Please select an option" : false,
                    })}
                    className="w-4 h-4 text-blue-600 accent-blue-500"
                  />
                  <span className="text-sm">No</span>
                </label>
              </div>
              {errors.hasSideBusiness && (
                <span className="text-red-500 text-xs mt-1">{errors.hasSideBusiness.message}</span>
              )}
            </div>

            {hasSideBusiness && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="sideBusiness.businessName" className="font-medium text-gray-700 mb-2 text-sm">
                      Name Of Business *
                    </label>
                    <input
                      id="sideBusiness.businessName"
                      type="text"
                      {...register("sideBusiness.businessName", {
                        required: hasSideBusiness ? "Business name is required" : false,
                      })}
                      className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.sideBusiness?.businessName ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.sideBusiness?.businessName && (
                      <span className="text-red-500 text-xs mt-1">{errors.sideBusiness.businessName.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="sideBusiness.businessRegNumber" className="font-medium text-gray-700 mb-2 text-sm">
                      Business Reg. Number *
                    </label>
                    <input
                      id="sideBusiness.businessRegNumber"
                      type="text"
                      {...register("sideBusiness.businessRegNumber", {
                        required: hasSideBusiness ? "Business registration number is required" : false,
                      })}
                      className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.sideBusiness?.businessRegNumber ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.sideBusiness?.businessRegNumber && (
                      <span className="text-red-500 text-xs mt-1">{errors.sideBusiness.businessRegNumber.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="sideBusiness.businessType" className="font-medium text-gray-700 mb-2 text-sm">
                      Business Type *
                    </label>
                    <select
                      id="sideBusiness.businessType"
                      {...register("sideBusiness.businessType", {
                        required: hasSideBusiness ? "Business type is required" : false,
                      })}
                      className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.sideBusiness?.businessType ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                    >
                      <option value="">Select Business Type</option>
                      <option value="Sole Proprietorship">Sole Proprietorship</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Limited Liability Company">Limited Liability Company</option>
                      <option value="Corporation">Corporation</option>
                    </select>
                    {errors.sideBusiness?.businessType && (
                      <span className="text-red-500 text-xs mt-1">{errors.sideBusiness.businessType.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="sideBusiness.directorsBVN" className="font-medium text-gray-700 mb-2 text-sm">
                      Directors BVN *
                    </label>
                    <input
                      id="sideBusiness.directorsBVN"
                      type="text"
                      {...register("sideBusiness.directorsBVN", {
                        required: hasSideBusiness ? "Directors BVN is required" : false,
                      })}
                      className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.sideBusiness?.directorsBVN ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.sideBusiness?.directorsBVN && (
                      <span className="text-red-500 text-xs mt-1">{errors.sideBusiness.directorsBVN.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="sideBusiness.directorsFirstName" className="font-medium text-gray-700 mb-2 text-sm">
                      Directors First Name *
                    </label>
                    <input
                      id="sideBusiness.directorsFirstName"
                      type="text"
                      {...register("sideBusiness.directorsFirstName", {
                        required: hasSideBusiness ? "Directors first name is required" : false,
                      })}
                      className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.sideBusiness?.directorsFirstName ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.sideBusiness?.directorsFirstName && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.sideBusiness.directorsFirstName.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="sideBusiness.directorsLastName" className="font-medium text-gray-700 mb-2 text-sm">
                      Directors Last Name *
                    </label>
                    <input
                      id="sideBusiness.directorsLastName"
                      type="text"
                      {...register("sideBusiness.directorsLastName", {
                        required: hasSideBusiness ? "Directors last name is required" : false,
                      })}
                      className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.sideBusiness?.directorsLastName ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.sideBusiness?.directorsLastName && (
                      <span className="text-red-500 text-xs mt-1">{errors.sideBusiness.directorsLastName.message}</span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Business Owner Form */}
        {profession === "BUSINESS_OWNER" && (
          <>
            {/* Business Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="businessIndustry" className="font-medium text-gray-700 mb-2 text-sm">
                    Industry *
                  </label>
                  <select
                    id="businessIndustry"
                    {...register("businessIndustry", {
                      required: profession === "BUSINESS_OWNER" ? "Industry is required" : false,
                    })}
                    className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.businessIndustry ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  >
                    <option value="">Select Industry</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Retail">Retail</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.businessIndustry && (
                    <span className="text-red-500 text-xs mt-1">{errors.businessIndustry.message}</span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="businessName" className="font-medium text-gray-700 mb-2 text-sm">
                    Name Of Business *
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    {...register("businessName", {
                      required: profession === "BUSINESS_OWNER" ? "Business name is required" : false,
                    })}
                    className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.businessName ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  />
                  {errors.businessName && (
                    <span className="text-red-500 text-xs mt-1">{errors.businessName.message}</span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="businessType" className="font-medium text-gray-700 mb-2 text-sm">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    {...register("businessType", {
                      required: profession === "BUSINESS_OWNER" ? "Business type is required" : false,
                    })}
                    className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.businessType ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  >
                    <option value="">Select Business Type</option>
                    <option value="Sole Proprietorship">Sole Proprietorship</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Limited Liability Company">Limited Liability Company</option>
                    <option value="Corporation">Corporation</option>
                  </select>
                  {errors.businessType && (
                    <span className="text-red-500 text-xs mt-1">{errors.businessType.message}</span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="businessRegNumber" className="font-medium text-gray-700 mb-2 text-sm">
                    Business Reg. Number *
                  </label>
                  <input
                    id="businessRegNumber"
                    type="text"
                    {...register("businessRegNumber", {
                      required: profession === "BUSINESS_OWNER" ? "Business registration number is required" : false,
                    })}
                    className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.businessRegNumber ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  />
                  {errors.businessRegNumber && (
                    <span className="text-red-500 text-xs mt-1">{errors.businessRegNumber.message}</span>
                  )}
                </div>

                <div className="flex flex-col md:col-span-2">
                  <label htmlFor="yearsOfOperation" className="font-medium text-gray-700 mb-2 text-sm">
                    Years Of Operation *
                  </label>
                  <select
                    id="yearsOfOperation"
                    {...register("yearsOfOperation", {
                      required: profession === "BUSINESS_OWNER" ? "Years of operation is required" : false,
                    })}
                    className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.yearsOfOperation ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  >
                    <option value="">Select Years</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5-10 years">5-10 years</option>
                    <option value="More than 10 years">More than 10 years</option>
                  </select>
                  {errors.yearsOfOperation && (
                    <span className="text-red-500 text-xs mt-1">{errors.yearsOfOperation.message}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Business Bank Account */}
            <div>
              <label className="block font-medium text-gray-700 mb-4">Do you have a business bank account? *</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="true"
                    {...register("hasBusinessBankAccount", {
                      required: profession === "BUSINESS_OWNER" ? "Please select an option" : false,
                    })}
                    className="w-4 h-4 text-blue-600 accent-blue-500"
                  />
                  <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="false"
                    {...register("hasBusinessBankAccount", {
                      required: profession === "BUSINESS_OWNER" ? "Please select an option" : false,
                    })}
                    className="w-4 h-4 text-blue-600 accent-blue-500"
                  />
                  <span className="text-sm">No</span>
                </label>
              </div>
              {errors.hasBusinessBankAccount && (
                <span className="text-red-500 text-xs mt-1">{errors.hasBusinessBankAccount.message}</span>
              )}
            </div>

            {/* Business Bank - Show only if has business bank account is TRUE */}
            {hasBusinessBankAccount && (
              <div className="flex flex-col">
                <label htmlFor="businessBank" className="font-medium text-gray-700 mb-2 text-sm">
                  Business Bank *
                </label>
                <select
                  id="businessBank"
                  {...register("businessBank", {
                    required: hasBusinessBankAccount ? "Business bank is required" : false,
                  })}
                  className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.businessBank ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                >
                  <option value="">Select Bank</option>
                  <option value="Access Bank">Access Bank</option>
                  <option value="GTBank">GTBank</option>
                  <option value="First Bank">First Bank</option>
                  <option value="UBA">UBA</option>
                  <option value="Zenith Bank">Zenith Bank</option>
                  <option value="Other">Other</option>
                </select>
                {errors.businessBank && (
                  <span className="text-red-500 text-xs mt-1">{errors.businessBank.message}</span>
                )}
              </div>
            )}

            {/* Director Questions */}
            <div>
              <label className="block font-medium text-gray-700 mb-4">Are you a director of the business? *</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="true"
                    {...register("isDirector", {
                      required: profession === "BUSINESS_OWNER" ? "Please select an option" : false,
                    })}
                    className="w-4 h-4 text-blue-600 accent-blue-500"
                  />
                  <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="false"
                    {...register("isDirector", {
                      required: profession === "BUSINESS_OWNER" ? "Please select an option" : false,
                    })}
                    className="w-4 h-4 text-blue-600 accent-blue-500"
                  />
                  <span className="text-sm">No</span>
                </label>
              </div>
              {errors.isDirector && <span className="text-red-500 text-xs mt-1">{errors.isDirector.message}</span>}
            </div>

            {/* Number of Directors - Show only if is director is TRUE */}
            {isDirector && (
              <div className="flex flex-col">
                <label htmlFor="numberOfDirectors" className="font-medium text-gray-700 mb-2 text-sm">
                  How many directors does your Business have? *
                </label>
                <select
                  id="numberOfDirectors"
                  {...register("numberOfDirectors", {
                    required: isDirector ? "Number of directors is required" : false,
                  })}
                  className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.numberOfDirectors ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                >
                  <option value="">Select Number</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
                {errors.numberOfDirectors && (
                  <span className="text-red-500 text-xs mt-1">{errors.numberOfDirectors.message}</span>
                )}
              </div>
            )}

            {/* Directors Information - Show only if is director is TRUE */}
            {isDirector && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Directors Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col md:col-span-2">
                    <label
                      htmlFor="directorsInformation.directorsBVN"
                      className="font-medium text-gray-700 mb-2 text-sm"
                    >
                      Directors BVN *
                    </label>
                    <input
                      id="directorsInformation.directorsBVN"
                      type="text"
                      {...register("directorsInformation.directorsBVN", {
                        required: isDirector ? "Directors BVN is required" : false,
                      })}
                      className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.directorsInformation?.directorsBVN ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.directorsInformation?.directorsBVN && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.directorsInformation.directorsBVN.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="directorsInformation.directorsFirstName"
                      className="font-medium text-gray-700 mb-2 text-sm"
                    >
                      Directors First Name *
                    </label>
                    <input
                      id="directorsInformation.directorsFirstName"
                      type="text"
                      {...register("directorsInformation.directorsFirstName", {
                        required: isDirector ? "Directors first name is required" : false,
                      })}
                      className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.directorsInformation?.directorsFirstName ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.directorsInformation?.directorsFirstName && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.directorsInformation.directorsFirstName.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="directorsInformation.directorsLastName"
                      className="font-medium text-gray-700 mb-2 text-sm"
                    >
                      Directors Last Name *
                    </label>
                    <input
                      id="directorsInformation.directorsLastName"
                      type="text"
                      {...register("directorsInformation.directorsLastName", {
                        required: isDirector ? "Directors last name is required" : false,
                      })}
                      className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.directorsInformation?.directorsLastName ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.directorsInformation?.directorsLastName && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.directorsInformation.directorsLastName.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Self Employed Form - Similar to Business Owner but with different fields */}
        {profession === "SELF_EMPLOYED" && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Self Employment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="businessIndustry" className="font-medium text-gray-700 mb-2 text-sm">
                  Industry *
                </label>
                <select
                  id="businessIndustry"
                  {...register("businessIndustry", {
                    required: profession === "SELF_EMPLOYED" ? "Industry is required" : false,
                  })}
                  className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.businessIndustry ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                >
                  <option value="">Select Industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Finance">Finance</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Retail">Retail</option>
                  <option value="Other">Other</option>
                </select>
                {errors.businessIndustry && (
                  <span className="text-red-500 text-xs mt-1">{errors.businessIndustry.message}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="yearsOfOperation" className="font-medium text-gray-700 mb-2 text-sm">
                  Years Of Operation *
                </label>
                <select
                  id="yearsOfOperation"
                  {...register("yearsOfOperation", {
                    required: profession === "SELF_EMPLOYED" ? "Years of operation is required" : false,
                  })}
                  className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.yearsOfOperation ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                >
                  <option value="">Select Years</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="More than 10 years">More than 10 years</option>
                </select>
                {errors.yearsOfOperation && (
                  <span className="text-red-500 text-xs mt-1">{errors.yearsOfOperation.message}</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Expenses Details - Common for all professions */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Expenses Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profession === "BUSINESS_OWNER" && (
              <div className="flex flex-col">
                <label htmlFor="monthlyGrossIncome" className="font-medium text-gray-700 mb-2 text-sm">
                  Monthly Gross Income (₦) *
                </label>
                <input
                  id="monthlyGrossIncome"
                  type="number"
                  min="0"
                  step="0.01"
                  {...register("monthlyGrossIncome", {
                    required: profession === "BUSINESS_OWNER" ? "Monthly gross income is required" : false,
                    min: { value: 0, message: "Amount must be positive" },
                  })}
                  className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.monthlyGrossIncome ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                />
                {errors.monthlyGrossIncome && (
                  <span className="text-red-500 text-xs mt-1">{errors.monthlyGrossIncome.message}</span>
                )}
              </div>
            )}

            <div className="flex flex-col">
              <label htmlFor="totalMonthlyExpenses" className="font-medium text-gray-700 mb-2 text-sm">
                Total Monthly Expenses (₦) *
              </label>
              <input
                id="totalMonthlyExpenses"
                type="number"
                min="0"
                step="0.01"
                {...register("totalMonthlyExpenses", {
                  required: "Total monthly expenses is required",
                  min: { value: 0, message: "Amount must be positive" },
                })}
                className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.totalMonthlyExpenses ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              {errors.totalMonthlyExpenses && (
                <span className="text-red-500 text-xs mt-1">{errors.totalMonthlyExpenses.message}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="totalTakeHomePay" className="font-medium text-gray-700 mb-2 text-sm">
                Total Take-Home Pay (After Expenses) (₦) *
              </label>
              <input
                id="totalTakeHomePay"
                type="number"
                min="0"
                step="0.01"
                {...register("totalTakeHomePay", {
                  required: "Total take-home pay is required",
                  min: { value: 0, message: "Amount must be positive" },
                })}
                className={`px-3 py-2 border rounded-md text-sm transition-colors ${errors.totalTakeHomePay ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              {errors.totalTakeHomePay && (
                <span className="text-red-500 text-xs mt-1">{errors.totalTakeHomePay.message}</span>
              )}
            </div>
          </div>
        </div>

        {/* Vehicle Purpose - Common for all professions */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Purpose</h3>
          <label className="block font-medium text-gray-700 mb-4">What will the vehicle be used for? *</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="PERSONAL"
                {...register("vehiclePurpose", { required: "Please select vehicle purpose" })}
                className="w-4 h-4 text-blue-600 accent-blue-500"
              />
              <span className="text-sm">Personal</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="BUSINESS"
                {...register("vehiclePurpose", { required: "Please select vehicle purpose" })}
                className="w-4 h-4 text-blue-600 accent-blue-500"
              />
              <span className="text-sm">Business</span>
            </label>
          </div>
          {errors.vehiclePurpose && <span className="text-red-500 text-xs mt-1">{errors.vehiclePurpose.message}</span>}
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
  )
}
