import React, { MouseEvent, ReactNode } from 'react'
import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

interface FeatureProps {
  headline: string
  body: string
  icon: ReactNode
  className?: string
}

const Feature = ({ headline, body, icon, className }: FeatureProps) => {
  const defaultClasses =
    'flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl'

  const combinedClasses = `${defaultClasses} ${className}`

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
        {icon}
      </div>

      <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
        {headline}
      </h3>
      <p className="mb-2 text-center text-gray-500">{body}</p>
      <a
        href="#"
        className="font-bold text-secondary transition duration-100 hover:text-indigo-600 active:text-indigo-700"
      >
        More
      </a>
    </div>
  )
}

export default Feature
