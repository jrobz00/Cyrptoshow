import React, { MouseEvent } from 'react'

interface ButtonProps {
  text: string
  href: string
  className?: string
}

const Button = ({ text, href, className }: ButtonProps) => {
  const defaultClasses =
    'inline-block rounded-lg bg-custom-black px-4 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base'

  const combinedClasses = `${defaultClasses} ${className}`

  return (
    <a href={href} className={combinedClasses}>
      {text}
    </a>
  )
}

export default Button
