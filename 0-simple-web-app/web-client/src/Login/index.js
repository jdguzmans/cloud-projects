/* global FormData */

import * as React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import {
  Main,
  Form,
  Input,
  LoginButton,
  SignupButton
} from './styles'

const enhance = compose(
  withState('isLoading', 'setLoading', ''),
  withHandlers({
    login: ({setLoading}) => async (event) => {
      event.preventDefault()
      setLoading(true)

      const data = new FormData(event.target)
      const email = data.get('email')
      const password = data.get('password')

      setLoading(false)
    }
  })
)

const Login = enhance(({ login, isLoading }) => {
  return (
    <Main>
      <Form autocomplete='off' onSubmit={login}>
        <Input
          name='email'
          type='email'
          placeholder='Correo electrónico'
          margin='normal'
          fullwidth
          InputProps={{
            disableUnderline: true
          }}
        />

        <Input
          name='password'
          type='password'
          placeholder='Contraseña'
          margin='normal'
          fullwidth
          InputProps={{
            disableUnderline: true
          }}
        />

        <LoginButton type='submit' disabled={isLoading}>
          Iniciar sesión
        </LoginButton>
        <SignupButton disabled={isLoading}>
          Regístrate
        </SignupButton>
      </Form>

    </Main>
  )
})

export default Login
