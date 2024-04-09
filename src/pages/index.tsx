import Navbar from '@/components/Navbar'
import '../app/styles/globals.css'
import LandingPage from './_LandingPage'
import { Box, Button, CssVarsProvider, Typography } from '@mui/joy'

export default function Home() {
  return (
    <main>
      <div className="bg-white">
        <div className="mx-auto ">
          <Navbar />
          <LandingPage />
        </div>
      </div>
    </main>
  )
}
