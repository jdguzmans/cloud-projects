/* global FormData alert, localStorage */

import * as React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { withApollo } from 'react-apollo'
import { withRouter } from 'react-router'
import { TOKEN_KEY } from '../config'

import Loading from '../Loading/index.js'
import { SIGNIN, SIGNUP } from './mutations'

import {
  Main,
  Form,
  Input,
  LoginButton,
  SignupButton
} from './styles'

const enhance = compose(
  withState('isLoading', 'setLoading', true),
  withState('isSigningIn', 'setSigninIn', true),
  withApollo,
  withRouter,
  withHandlers({
    submit: ({ setLoading, client, isSigningIn, history }) => async (event) => {
      event.preventDefault()
      setLoading(true)
      const data = new FormData(event.target)
      const email = data.get('email')
      const password = data.get('password')
      try {
        const { data } = await client.mutate({
          mutation: isSigningIn ? SIGNIN : SIGNUP,
          variables: {
            email: email,
            password: password
          }
        })
        const token = isSigningIn ? data.signin : data.signup
        localStorage.setItem(TOKEN_KEY, token)
        history.replace('home')
      } catch (e) {
        alert(e.message.replace('GraphQL error: ', ''))
      }

      setLoading(false)
    }
  }),
  lifecycle({
    componentDidMount () {
      const token = localStorage.getItem(TOKEN_KEY)
      if (token) this.props.history.replace('home')
      else this.props.setLoading(false)
    }
  })
)

const Login = enhance(({ submit, isLoading, setSigninIn }) => {
  if (isLoading) return <Loading />
  else {
    return (
      <Main>
        <Form autocomplete='off' onSubmit={submit}>
          <Input
            name='email'
            type='text'
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

          <LoginButton type='submit' disabled={isLoading}
            onClick={(e) => {
              setSigninIn(true)
            }}>
          Iniciar sesión
        </LoginButton>
          <SignupButton disabled={isLoading}
            onClick={(e) => {
              setSigninIn(false)
            }}>>
          Regístrate
        </SignupButton>
        </Form>

      </Main>
    )
  }
})

export default Login
