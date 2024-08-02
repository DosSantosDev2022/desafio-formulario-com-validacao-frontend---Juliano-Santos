import React from 'react'

interface Step {
  index: string
  content: string
}

interface StepsProps {
  steps: Step[]
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

export function Steps({ steps, currentStep, setCurrentStep }: StepsProps) {
  return (
    <div className="w-full  flex items-center justify-center  gap-1  ">
      {steps.map((step, index) => (
        <div
          key={step.index}
          className={`flex items-center justify-center gap-2  px-1.5 py-2 w-full cursor-pointer 
          ${currentStep === index ? 'text-violet-900 font-bold' : 'text-zinc-500'}`}
          onClick={() => setCurrentStep(index)}
        >
          <div
            className={`bg-violet-900 rounded-full lg:p-5 p-4 lg:w-7 lg:h-7 w-5 h-5 font-medium flex items-center justify-center
               text-zinc-50
               ${currentStep === index ? 'bg-violet-900' : 'bg-zinc-500'}`}
          >
            {step.index}
          </div>
          <button className="font-bold text-sm lg:text-lg">
            {step.content}{' '}
          </button>
        </div>
      ))}
    </div>
  )
}
