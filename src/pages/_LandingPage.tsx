import Button from '@/components/Button'
import '../app/styles/globals.css'
import IconText from '@/components/Feature'
import Feature from '@/components/Feature'

export default function LandingPage() {
  return (
    <main>
      {/* background - start */}
      {/* <img
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/images/landingPageImage.png"
        alt="Landing Page Image"
      ></img> */}

      <div className="flex absolute justify-evenly w-screen h-[1080px]">
        <div className="top-0 left-0 bg-custom-green h-screen w-auto md:w-[29rem] sm:w-screen z-[-1] "></div>
        <div className="bg-custom-white flex flex-1 justify-center items-center h-screen w-screen z-[-1] ">
          <img
            className="min-h-[20.5rem] max-h-[32.5rem] w-auto"
            src="/images/landingImageCrop.png"
            alt="Landing Page Image"
          ></img>
        </div>
      </div>
      {/* background - end */}

      {/* hero - start */}
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
          <header className="mb-4 flex items-center justify-between py-4 md:py-8 ">
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
                  href="#"
                  className="text-lg font-semibold text-custom-black transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                >
                  How it works
                </a>
                <a
                  href="#"
                  className="text-lg font-semibold text-custom-black  transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-lg font-semibold text-custom-black  transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                >
                  About us
                </a>
                <Button
                  text="Sign in"
                  href="#"
                  className="bg-custom-red"
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

          <section className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
              <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                <h1 className="mb-4 h1-custom">
                  First
                  <br />
                  Impressions
                  <br />
                  Count
                </h1>

                <p className="mb-4 max-w-md leading-relaxed text-gray-500 xl:text-lg">
                  It takes <b>7s</b> for a customer to form an impression
                  Discover how we can make it a lasting one
                  <br />
                </p>

                <Button
                  text="Get Started ➜"
                  href="#"
                  className="w-[150px]"
                ></Button>
              </div>

              <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                <div className="floating-item relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                  <img
                    src="/images/LandingPageFloatingImageFront.png"
                    loading="lazy"
                    alt="Photo by Kaung Htet"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="floating-item delayed overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                  <img
                    src="/images/LandingPageFloatingImageBack.png"
                    loading="lazy"
                    alt="Photo by Manny Moreno"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              {/* <!-- social - start --> */}
              <div className="flex items-center justify-center gap-4 lg:justify-start">
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
                  Social
                </span>
                <span className="h-px w-12 bg-gray-200"></span>

                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.4168 2.4594C17.7648 0.873472 15.4785 0 12.9793 0C9.1616 0 6.81353 1.56493 5.51603 2.87767C3.91693 4.49547 3 6.64362 3 8.77138C3 11.4429 4.11746 13.4934 5.98876 14.2563C6.11439 14.3078 6.24081 14.3337 6.36475 14.3337C6.75953 14.3337 7.07233 14.0754 7.1807 13.661C7.24389 13.4233 7.39024 12.8369 7.45389 12.5823C7.59011 12.0795 7.48005 11.8377 7.18295 11.4876C6.64173 10.8472 6.38969 10.0899 6.38969 9.10438C6.38969 6.17698 8.56948 3.06578 12.6095 3.06578C15.8151 3.06578 17.8064 4.88772 17.8064 7.82052C17.8064 9.67124 17.4077 11.3852 16.6837 12.6468C16.1805 13.5235 15.2957 14.5685 13.9375 14.5685C13.3501 14.5685 12.8225 14.3272 12.4896 13.9066C12.1751 13.5089 12.0714 12.9953 12.1979 12.4599C12.3408 11.855 12.5357 11.2241 12.7243 10.6141C13.0682 9.5001 13.3933 8.44789 13.3933 7.60841C13.3933 6.17252 12.5106 5.20769 11.1969 5.20769C9.52737 5.20769 8.21941 6.90336 8.21941 9.06805C8.21941 10.1297 8.50155 10.9237 8.62929 11.2286C8.41896 12.1197 7.16899 17.4176 6.93189 18.4166C6.79478 18.9997 5.96893 23.6059 7.33586 23.9731C8.87168 24.3858 10.2445 19.8997 10.3842 19.3928C10.4975 18.9806 10.8937 17.4216 11.1365 16.4634C11.878 17.1775 13.0717 17.6603 14.2333 17.6603C16.4231 17.6603 18.3924 16.6749 19.7786 14.8858C21.1229 13.1505 21.8633 10.7318 21.8633 8.0757C21.8632 5.99923 20.9714 3.95209 19.4168 2.4594Z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* <!-- social - end --> */}
            </div>
          </section>
        </div>
      </div>
      {/* hero - end */}

      {/* Content section 1 */}

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              It all starts with a lift
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            {/* <!-- feature - start --> */}
            <Feature
              headline="Growth"
              body=" Filler text is dummy text which has no meaning however looks
                  very similar to real text."
              svg="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              className=""
            ></Feature>
            <Feature
              headline="Growth"
              body=" Filler text is dummy text which has no meaning however looks
                  very similar to real text."
              svg="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              className=""
            ></Feature>
            <Feature
              headline="Growth"
              body=" Filler text is dummy text which has no meaning however looks
                  very similar to real text."
              svg="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              className=""
            ></Feature>
            <Feature
              headline="Growth"
              body=" Filler text is dummy text which has no meaning however looks
                  very similar to real text."
              svg="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              className=""
            ></Feature>
            <Feature
              headline="Growth"
              body=" Filler text is dummy text which has no meaning however looks
                  very similar to real text."
              svg="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              className=""
            ></Feature>
            <Feature
              headline="Growth"
              body=" Filler text is dummy text which has no meaning however looks
                  very similar to real text."
              svg="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              className=""
            ></Feature>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center  gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl ">
                Our Projects
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                VR
              </span>
            </a>
            {/* <!-- image - end -->

      <!-- image - start --> */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Tech
              </span>
            </a>
            {/* <!-- image - end -->

      <!-- image - start --> */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Dev
              </span>
            </a>
            {/* <!-- image - end -->

      <!-- image - start --> */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Retro
              </span>
            </a>
            {/* <!-- image - end --> */}
          </div>
        </div>
      </div>

      {/* stats - start */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          {/* text - start */}
          <div className="mb-8 md:mb-12">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Our Team by the numbers
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* text - end */}

          <div className="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
            {/* stat - start */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                200
              </div>
              <div className="text-sm text-indigo-200 sm:text-base">People</div>
            </div>
            {/* stat - end */}

            {/* stat - start */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                500+
              </div>
              <div className="text-sm text-indigo-200 sm:text-base">People</div>
            </div>

            {/* stat - start */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                1000+
              </div>
              <div className="text-sm text-indigo-200 sm:text-base">
                Customers
              </div>
            </div>
            {/* stat - end */}

            {/* stat - start */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                A couple
              </div>
              <div className="text-sm text-indigo-200 sm:text-base">
                Coffee breaks
              </div>
            </div>
            {/* stat - end */}
          </div>
        </div>
      </div>
      {/* stats - end */}

      {/* call to action - start */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
            {/* image - start */}
            <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Andras Vas"
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* image - end */}

            {/* content - start */}
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
                Help center
              </h2>

              <p className="mb-8 max-w-md text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text.
              </p>

              <div className="mt-auto">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                  Contact support
                </a>
              </div>
            </div>
            {/* content - end */}
          </div>
        </div>
      </div>
      {/* call to action - end */}

      {/* footer - start */}
      <footer className="bg-white">
        <div className="bg-indigo-500 py-6">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
              <div className="mb-3 text-center md:mb-0 md:text-left">
                <span className="font-bold uppercase tracking-widest text-gray-100">
                  Newsletter
                </span>
                <p className="text-indigo-200">Subscribe to our newsletter</p>
              </div>

              <form className="flex w-full gap-2 md:max-w-md">
                <input
                  placeholder="Email"
                  className="w-full flex-1 rounded border border-white bg-indigo-400 px-3 py-2 text-white placeholder-indigo-100 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />

                <button className="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-indigo-600 md:text-base">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-12 lg:pt-16">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
              <div className="col-span-full lg:col-span-2">
                {/* logo - start */}
                <div className="mb-4 lg:-mt-2 ">
                  <img
                    className=" min-h-[25px] max-h-[25px] h-[5vh]"
                    src="/images/logo.png"
                    alt="Logo"
                  />
                </div>
                {/* logo - end */}

                <p className="mb-6 text-gray-500 sm:pr-8">
                  Filler text is dummy text which has no meaning however looks
                  very similar to real text
                </p>

                {/* social - start */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
                {/* social - end */}
              </div>

              {/* nav - start */}
              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                  Products
                </div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Overview
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Solutions
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Pricing
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Customers
                    </a>
                  </div>
                </nav>
              </div>
              {/* nav - end */}

              {/* nav - start */}
              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                  Company
                </div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      About
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Investor Relations
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Jobs
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Press
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Blog
                    </a>
                  </div>
                </nav>
              </div>
              {/* nav - end */}

              {/* {/* nav - start */}
              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                  Support
                </div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Contact
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Documentation
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Chat
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      FAQ
                    </a>
                  </div>
                </nav>
              </div>
              {/* nav - end */}

              {/* nav - start */}
              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                  Legal
                </div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Terms of Service
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Privacy Policy
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Cookie settings
                    </a>
                  </div>
                </nav>
              </div>
              {/* nav - end */}
            </div>

            <div className="border-t py-8 text-center text-sm text-gray-400">
              © 2021 - Present Flowrift. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      {/* footer - end */}
    </main>
  )
}
