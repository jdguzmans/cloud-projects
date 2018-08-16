/* global */

import * as React from 'react'
import { compose, withState } from 'recompose'
import { Query } from 'react-apollo'
import {
  Main
} from './styles'
import Loading from '../Loading/index.js'
import QUERY from './queries'
import Events from '../Events/index.js'

const enhance = compose(
  withState('isLoading', 'setLoading', false)
)

const Home = enhance(({ isLoading }) => {
  return (
    <Query query={QUERY} >
      {({ loading, error, data }) => {
        if (loading) return <Loading />
        else {
          const { eventCategories } = data
          return (
            <Main>
              <Events categories={eventCategories} />
            </Main>
          )
        }
      }}
    </Query>
  )
})

export default Home
