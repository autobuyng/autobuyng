"use client"
import { SuccessIcon } from "@/app/(buyer)/icons";
import { useRouter } from "next-nprogress-bar";

export default function Component() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full text-center">
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            <SuccessIcon />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Application Submitted<br />Successfully!
        </h1>

        <div className="text-gray-600 text-sm leading-relaxed mb-8 space-y-4">
          <p>
            Thank you for applying for a car loan with <strong>Autobuy Africa</strong>.
          </p>

          <p>
            Your application has been received and is currently under review.
          </p>

          <p>
            Kindly wait <strong>24-48 hours</strong> for our partner banks/financiers to assess your information and update you on the next steps.
          </p>

          <p>
            You&apos;ll be notified via email or SMS once your application status is available.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            What next?
          </h2>
          <p className="text-gray-600 text-sm">
            You&apos;ll be notified via email or SMS once your application status is available.
          </p>
        </div>

        <div className="flex gap-3 justify-center max-w-[90%] w-full">
          <button onClick={() => router.push("/")} className="px-2 md:px-6 py-2 border border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Home
          </button>
          <button onClick={() => router.push("/orders")} className=" px-2 md:px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
