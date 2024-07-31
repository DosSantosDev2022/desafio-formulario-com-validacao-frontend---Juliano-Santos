import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.InputHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  return (
    <label
      className={twMerge(
        'text-lg text-zinc-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

Label.displayName = 'Label'
