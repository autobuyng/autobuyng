import React from 'react';

import { FileText, MessageCircle } from "lucide-react"


type FaqTypes = {
  setStep: React.Dispatch<React.SetStateAction<string>>
}
const Faqs = ({ setStep }: FaqTypes) => {
  const faqItems = [
    "How do I upload a vehicle for sale on the platform?",
    "How do buyers book an inspection for my listed vehicle?",
    "How do I upload a vehicle for sale on the platform?",
    "How do I upload a vehicle for sale on the platform?",
    "How do I upload a vehicle for sale on the platform?",
    "How do I upload a vehicle for sale on the platform?",
    "How do I upload a vehicle for sale on the platform?",
    "How do I upload a vehicle for sale on the platform?",
  ]

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="w-full mx-auto">
        <div className="space-y-2 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">How can we help you?</h1>
          <p className="text-gray-600">Let&apos;s Support you in every way we can</p>
        </div>

        <div className="space-y-3 mb-8">
          {faqItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <FileText className="w-5 h-5 text-gray-400 shrink-0" />
              <span className="text-gray-700">{item}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-[#E85D4C] text-white rounded-lg hover:bg-[#d54c3b] transition-colors duration-200">
            Resolve an issue
          </button>
          <button onClick={() => setStep("contactus")} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
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
};

export default Faqs;
