import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const TextArea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      {...props}
      ref={ref}
      className={twMerge(
        'w-[464px] rounded bg-zinc-800 px-3 py-4 font-light text-zinc-200 outline-none focus:ring-2 focus:ring-zinc-900',
        className,
      )}
    />
  )
})
TextArea.displayName = 'textArea'

export default TextArea
