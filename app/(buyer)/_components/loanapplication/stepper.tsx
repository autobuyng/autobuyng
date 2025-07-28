"use client"

interface StepperProps {
  currentStep: number
  steps: string[]
}

export default function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <div className="flex justify-between items-center mb-8 px-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center relative flex-1">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold mb-2 transition-all duration-300 ${index + 1 <= currentStep ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
              }`}
          >
            {index + 1}
          </div>
          <div className="text-sm text-center text-gray-600 max-w-[120px]">{step}</div>
          {index < steps.length - 1 && (
            <div
              className={`absolute top-5 left-1/2 w-full h-0.5 -z-10 ${index + 1 < currentStep ? "bg-blue-500" : "bg-gray-200"
                }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
