import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Container({ children, className }) {
  return (
    <div
      className={twMerge("w-full px-6 md:px-20", className)}
    >
      {children}
    </div>
  )
}
