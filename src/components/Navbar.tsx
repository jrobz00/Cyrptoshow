import React, { MouseEvent } from 'react'
import Image from 'next/image'
import { Box, Button, Typography } from '@mui/joy'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Box
      width="100vw"
      height="10vh"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px="1rem"
      py="1rem"
      bgcolor="white"
    >
      <Link href="./">
        <Image src="/images/logo.png" width="100" height="20" alt="logo" />
      </Link>

      <Box
        display="flex"
        alignItems="center"
        width="40vw"
        gap="1rem"
        justifyContent="flex-end"
      >
        {/* <Typography variant="plain" mx="1rem">
          Link
        </Typography>
        <Typography variant="plain" mx="1rem">
          Link
        </Typography> */}

        <Link href="./Register">
          <Button variant="plain" color="primary">
            Register
          </Button>
        </Link>
        <Link href="./Login">
          <Button variant="plain" color="primary">
            Login
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default Navbar
