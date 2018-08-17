/* global localStorage */

import * as React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import {
  Main,
  Session,
  Boton
} from './styles'
import Events from '../Events/index.js'
import Categories from '../Categories/index.js'

const enhance = compose(
  withState('isLoading', 'setLoading', false),
  withHandlers({
    logout: ({ setLoading, client, history }) => async () => {
      setLoading(true)
      localStorage.clear()
      history.replace('/')
    }
  })
)

const Home = enhance(({ isLoading, logout }) => {
  return (
    <Main>
      <Session
        onClick={(e) => {
          logout()
        }}
      >logout</Session>
      <Events />
      <Boton>+</Boton>
      <Categories />
    </Main>
  )
})

export default Home
