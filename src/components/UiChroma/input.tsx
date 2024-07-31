import React from 'react'
import { twMerge } from 'tailwind-merge'

const InputRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(
      'flex h-14 w-full items-center gap-3 rounded  bg-zinc-100 p-4 focus-within:ring-2 focus-within:ring-zinc-300',
      className,
    )}
    {...props}
  />
))

InputRoot.displayName = 'InputRoot'

const InputIcon = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <i ref={ref} className={twMerge('', className)} {...props} />
))

InputIcon.displayName = 'InputIcon'

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={twMerge(
        'text-lg flex-1 bg-transparent font-normal text-zinc-500 outline-none placeholder:text-zinc-400',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export { InputRoot, InputIcon, Input }
