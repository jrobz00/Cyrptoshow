import React, { MouseEvent } from 'react'

interface FeatureProps {
  headline: string
  body: string
  svg: string
  className?: string
}

const Feature = ({ headline, body, svg, className }: FeatureProps) => {
  const defaultClasses =
    'flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl'

  const combinedClasses = `${defaultClasses} ${className}`

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      </div>

      <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
        Growth
      </h3>
      <p className="mb-2 text-center text-gray-500">
        Filler text is dummy text which has no meaning however looks very
        similar to real text.
      </p>
      <a
        href="#"
        className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
      >
        More
      </a>
    </div>
  )
}

export default Feature
