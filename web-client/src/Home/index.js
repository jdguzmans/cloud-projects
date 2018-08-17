/* global localStorage */

import * as React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import { withRouter } from 'react-router'

import {
  Main,
  Session,
  Button
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
  }),
  withRouter
)

const Home = enhance(({ isLoading, logout, history }) => {
  return (
    <Main>
      <Session
        onClick={(e) => {
          logout()
        }}
      >logout</Session>
      <Events />
      <Button onClick={(e) => {
        e.preventDefault()
        history.push('/event')
      }} >Agregar</Button>
      <Categories />
    </Main>
  )
})

export default Home
