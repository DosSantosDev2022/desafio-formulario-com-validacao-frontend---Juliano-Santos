import React, { useState } from 'react'
import { Steps } from './components/steps'
import { Form } from './components/form'

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0)

  const steps = [
    {
      index: '01',
      content: 'Contato',
    },
    {
      index: '02',
      content: 'Cargo',
    },
    {
      index: '03',
      content: 'Finalizar',
    },
  ]
  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <div className="border w-full lg:w-[592px]  space-y-8 shadow-sm bg-zinc-50 rounded-sm p-8">
          <Steps
            steps={steps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />

          <Form currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
      </main>
    </>
  )
}

export default App
