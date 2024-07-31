import React, { useState } from 'react'
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
import { SubmitHandler, useForm } from 'react-hook-form'
import { formSchema, FormValues } from '../@types/zodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

interface FormProps {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

export function Form({ currentStep, setCurrentStep }: FormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSucess] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      telefone: '',
      email: '',
      cargo: '',
    },
  })
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsLoading(true)
    setTimeout(() => {
      if (currentStep < 2) {
        setCurrentStep(currentStep + 1)
      } else {
        localStorage.setItem('formData', JSON.stringify(data))
        toast.success('Cadastro realizado com sucesso.')
        setIsSucess(true)
        setIsLoading(false)
      }
    }, 5000)
  }

  const buttonLabels = ['Continuar', 'Continuar', 'Finalizar']
  const selectedCargo = watch('cargo')
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6 items-center justify-around h-full">
        {currentStep === 0 && (
          <>
            <div className="w-full space-y-2">
              <Label className="">Nome</Label>
              <InputRoot>
                <InputIcon></InputIcon>
                <Input
                  {...register('nome', { required: true })}
                  placeholder="Digite o seu nome"
                />
              </InputRoot>
              {errors.nome && (
                <p className="text-red-500 font-medium">
                  {errors.nome.message}{' '}
                </p>
              )}
            </div>

            <div className="w-full space-y-2">
              <Label className="">Telefone</Label>
              <InputRoot>
                <InputIcon></InputIcon>
                <Input
                  {...register('telefone', { required: true })}
                  placeholder="(xx)xxxx-xxxx"
                />
              </InputRoot>
              {errors.nome && (
                <p className="text-red-500 font-medium">
                  {errors.telefone?.message}{' '}
                </p>
              )}
            </div>

            <div className="w-full space-y-2">
              <Label className="">E-mail</Label>
              <InputRoot>
                <InputIcon></InputIcon>
                <Input
                  {...register('email', { required: true })}
                  placeholder="exemplo@email.com"
                />
              </InputRoot>
              {errors.nome && (
                <p className="text-red-500 font-medium">
                  {errors.email?.message}{' '}
                </p>
              )}
            </div>
          </>
        )}

        {currentStep === 1 && (
          <>
            <div className="w-full h-full space-y-2">
              <Label className="">Cargo</Label>
              <SelectProvider setValue={setValue}>
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
                {errors.nome && (
                  <p className="text-red-500 font-medium">
                    {errors.cargo?.message}{' '}
                  </p>
                )}
              </SelectProvider>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="w-full space-y-2">
              <div className="px-2 py-6 space-y-2">
                <Label className="font-extrabold text-3xl text-violet-800">
                  Confirmação
                </Label>

                <h6 className="font-bold text-sm ml-2 text-zinc-500">
                  Revise seus dados antes de enviar.
                </h6>
              </div>
              <div className="space-y-4 px-2 py-6 text-zinc-500 text-base font-medium bg-zinc-100 shadow-sm rounded-sm ">
                <p className="">
                  <strong className="text-violet-800 ">Nome:</strong>{' '}
                  {watch('nome')}
                </p>
                <p className="">
                  <strong className="text-violet-800">Telefone:</strong>{' '}
                  {watch('telefone')}
                </p>
                <p className="">
                  <strong className="text-violet-800">E-mail:</strong>{' '}
                  {watch('email')}
                </p>
                <p className="">
                  <strong className="text-violet-800">Cargo:</strong>{' '}
                  {selectedCargo}
                </p>
              </div>
            </div>
          </>
        )}

        <Button
          type="submit"
          isLoading={isLoading}
          disabled={isLoading || isSuccess}
          sizes="full"
          variant="highlight"
        >
          {isLoading
            ? 'Enviando'
            : isSuccess
              ? 'Concluído'
              : buttonLabels[currentStep]}
        </Button>
      </div>
    </form>
  )
}
