import React, { MouseEvent } from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <header className="mb-4 flex items-center justify-between py-4 md:py-8">
      {/* logo - start */}
      <img
        className=" min-h-[25px] max-h-[25px] h-[5vh]"
        src="/images/logo.png"
        alt="Logo"
      />
      {/* logo - end */}

      <div className="flex ">
        {/* nav - start */}
        <nav className="hidden gap-12 lg:flex items-center">
          <a
            href="/ComingSoon"
            className="text-lg font-semibold text-custom-black transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            How it works
          </a>
          <a
            href="/ComingSoon"
            className="text-lg font-semibold text-custom-black  transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Pricing
          </a>
          <a
            href="/ComingSoon"
            className="text-lg font-semibold text-custom-black  transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            About us
          </a>
          <Button
            text="Sign in"
            href="/ComingSoon"
            className="bg-primary"
          ></Button>
        </nav>
        {/* nav - end */}

        {/* buttons - start */}

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>
        {/* buttons - end */}
      </div>
    </header>
  )
}

export default Navbar