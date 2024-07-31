import React from 'react'
import { Label } from './UiChroma/label'
import { Input, InputIcon, InputRoot } from './UiChroma/input'
import { Button } from './UiChroma/button'
import {
  SelectRoot,
  SelectContent,
  SelectOption,
  SelectProvider,
  SelectTrigger,
} from './UiChroma/select'

interface FormProps {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

export function Form({ currentStep, setCurrentStep }: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    }
  }

  const buttonLabels = ['Continuar', 'Continuar', 'Finalizar']

  const options = [
    {
      label: 'Desenvolvedor Frontend',
    },
    {
      label: 'Desenvolvedor Backend',
    },
    {
      label: 'Desenvolvedor Full Stack',
    },
    {
      label: 'Desenvolvedor Mobile',
    },
    {
      label: 'Desenvolvedor de Software',
    },
    {
      label: 'Engenheiro de Software',
    },
    {
      label: 'Arquiteto de Software',
    },
    {
      label: 'UI/UX Designer',
    },
    {
      label: 'Analista de Sistemas',
    },
    {
      label: 'Analista Programador',
    },
    {
      label: 'Engenheiro de Dados',
    },
    {
      label: 'QA Engineer',
    },
    {
      label: 'DevOps',
    },
  ]
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6 items-center justify-around h-full">
        {currentStep === 0 && (
          <>
            <div className="w-full space-y-2">
              <Label className="">Nome</Label>
              <InputRoot>
                <InputIcon></InputIcon>
                <Input placeholder="Digite o seu nome" />
              </InputRoot>
            </div>

            <div className="w-full space-y-2">
              <Label className="">Telefone</Label>
              <InputRoot>
                <InputIcon></InputIcon>
                <Input placeholder="(xx)xxxx-xxxx" />
              </InputRoot>
            </div>

            <div className="w-full space-y-2">
              <Label className="">E-mail</Label>
              <InputRoot>
                <InputIcon></InputIcon>
                <Input placeholder="exemplo@email.com" />
              </InputRoot>
            </div>
          </>
        )}

        {currentStep === 1 && (
          <>
            <div className="w-full h-full space-y-2">
              <Label className="">Cargo</Label>
              <SelectProvider>
                <SelectRoot>
                  <SelectTrigger />

                  <SelectContent>
                    {options.map((option) => (
                      <SelectOption key={option.label}>
                        {option.label}
                      </SelectOption>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </SelectProvider>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="w-full space-y-2">
              <Label className="">Confirmação</Label>
              <p>Revise seus dados antes de enviar.</p>
            </div>
          </>
        )}

        <Button sizes="full" variant="highlight">
          {buttonLabels[currentStep]}
        </Button>
      </div>
    </form>
  )
}
