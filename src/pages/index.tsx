import Navbar from '@/components/Navbar'
import '../app/styles/globals.css'
import LandingPage from './_LandingPage'

export default function Home() {
  return (
    <main>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 ">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
          <Navbar />
          <LandingPage />
        </div>
      </div>
    </main>
  )
}
