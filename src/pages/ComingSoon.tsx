import React from 'react'
import '../app/styles/globals.css'
import Image from 'next/image'

export default function ComingSoon() {
  return (
    <main>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 md:mb-2 lg:text-3xl">
              Sorry, we're still in development
            </h2>
            <p className="mb-4 text-center text-xl  text-gray-800 md:mb-6 lg:text-xl">
              Check back soon for updates
            </p>
            <Image
              alt="in development icon"
              src="/images/InDevelopment.png"
              className="m-auto floating-item relative "
            ></Image>
          </div>
        </div>
      </div>
    </main>
  )
}
