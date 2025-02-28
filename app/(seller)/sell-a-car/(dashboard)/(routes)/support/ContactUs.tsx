"use client"

import { useForm } from "react-hook-form"
import { MessageCircle } from "lucide-react"

type FormData = {
  fullName: string
  email: string
  phone: string
  message: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-2 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Contact us</h1>
          <p className="text-gray-600">Let&apos;s support you in every way we can</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left column - Input fields */}
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85D4C] focus:border-transparent outline-none transition"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && <span className="text-sm text-red-500">This field is required</span>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="mail@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85D4C] focus:border-transparent outline-none transition"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.type === "pattern" ? "Invalid email address" : "This field is required"}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="081000111000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85D4C] focus:border-transparent outline-none transition"
                  {...register("phone", { required: true })}
                />
                {errors.phone && <span className="text-sm text-red-500">This field is required</span>}
              </div>
            </div>

            {/* Right column - Textarea */}
            <div className="flex-1 space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here"
                className="w-full h-[calc(100%-2rem)] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85D4C] focus:border-transparent outline-none transition resize-none"
                {...register("message", { required: true })}
              />
              {errors.message && <span className="text-sm text-red-500">This field is required</span>}
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[#E85D4C] text-white rounded-lg hover:bg-[#d54c3b] transition-colors duration-200"
            >
              Send message
            </button>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-2 border border-[#E85D4C] text-[#E85D4C] rounded-lg hover:bg-gray-50 transition-colors duration-200">
            Resolve an issue
          </button>
          <button className="px-6 py-2 bg-[#E85D4C] text-white rounded-lg hover:bg-[#d54c3b] transition-colors duration-200">
            Contact us
          </button>
        </div>

        {/* Chat Widget */}
        <div className="fixed bottom-4 right-4 w-12 h-12 bg-[#4CAF50] rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer hover:bg-[#43a047] transition-colors duration-200">
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}

export default ContactForm;

