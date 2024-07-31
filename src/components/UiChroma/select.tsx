'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { createContext, ReactNode, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface SelectContext {
  isOpen: boolean
  toggleOpen: () => void
  selectedOption: string
  selectOption: (option: string) => void
}

const SelectContext = createContext<SelectContext | undefined>(undefined)

const useSelectContext = () => {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error('Select components must be used within a Select provider')
  }

  return context
}

const SelectProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Selecione')
  const toggleOpen = () => setIsOpen((prev) => !prev)

  const selectOption = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <SelectContext.Provider
      value={{ isOpen, toggleOpen, selectedOption, selectOption }}
    >
      {children}
    </SelectContext.Provider>
  )
}

const SelectRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div className={twMerge('w-full', className)} {...props} ref={ref} />
})

SelectRoot.displayName = 'SelectRoot'

const SelectIcon = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <i
      className={twMerge(
        'flex h-10 w-10 items-center justify-center text-zinc-900',
        className,
      )}
      {...props}
      ref={ref}
    />
  )
})

SelectIcon.displayName = 'SelectIcon'

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { toggleOpen, selectedOption, isOpen } = useSelectContext()
  return (
    <button
      type="button"
      value={'text'}
      onClick={toggleOpen}
      className={twMerge(
        ' focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border bg-secondary-50 px-3 py-2 text-sm text-primary-950 ring-offset-primary-950 placeholder:text-primary-950 ',
        className,
      )}
      {...props}
      ref={ref}
    >
      {selectedOption}

      {isOpen ? (
        <SelectIcon>
          <ChevronUp />
        </SelectIcon>
      ) : (
        <SelectIcon>
          <ChevronDown />
        </SelectIcon>
      )}
    </button>
  )
})

SelectTrigger.displayName = 'SelectTrigger'

const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isOpen } = useSelectContext()

  return (
    isOpen && (
      <div
        className={twMerge(
          'mt-1 max-h-[220px] overflow-x-auto rounded-md bg-zinc-50 border',
          className,
        )}
        {...props}
        ref={ref}
      />
    )
  )
})

SelectContent.displayName = 'SelectContent'

const SelectOption = React.forwardRef<
  HTMLOptionElement,
  React.HTMLAttributes<HTMLOptionElement>
>(({ className, children, ...props }, ref) => {
  const { selectOption } = useSelectContext()
  return (
    <option
      onClick={() => selectOption(children as string)}
      className={twMerge(
        'relative flex w-full cursor-pointer border items-center bg-secondary-50 py-2 hover:bg-zinc-200  pl-8  pr-2 text-sm text-zinc-950 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}{' '}
    </option>
  )
})

SelectOption.displayName = 'SelectOption'

export {
  SelectProvider,
  SelectContent,
  SelectRoot,
  SelectTrigger,
  SelectOption,
  SelectIcon,
}
