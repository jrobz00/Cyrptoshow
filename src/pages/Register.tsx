import * as React from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles'
import Sheet from '@mui/joy/Sheet'
import CssBaseline from '@mui/joy/CssBaseline'
import Typography from '@mui/joy/Typography'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import Button from '@mui/joy/Button'
import Link from '@mui/joy/Link'
import Navbar from '@/components/Navbar'

export default function Register() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [password1, setPassword1] = React.useState('')
  const [doPasswordsMatch, setPasswordMatch] = React.useState(true)

  const register = () => {
    console.log(email, password, password1)

    setPasswordMatch(password === password1)

    if (
      email.trim() !== '' &&
      password.trim() !== '' &&
      password1.trim() !== ''
    ) {
      //REGISTER CODE
    }
  }

  return (
    <CssVarsProvider>
      <Navbar />
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Please register below.</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            required={true}
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            required={true}
            name="password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>*Confirm Password</FormLabel>
          {!doPasswordsMatch && (
            <Typography
              fontSize="10px"
              color="danger"
              sx={{ marginBottom: '0.25rem' }}
            >
              {' '}
              Passwords do not match
            </Typography>
          )}
          <Input
            required={true}
            name="password2"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword1(e.target.value)}
            color={!doPasswordsMatch ? 'danger' : 'neutral'}
          />
        </FormControl>
        <Button sx={{ mt: 1 }} onClick={register} variant="soft">
          Register
        </Button>
        <Typography
          endDecorator={<Link href="/Login">Log in</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Already have an account
        </Typography>
      </Sheet>
    </CssVarsProvider>
  )
}
