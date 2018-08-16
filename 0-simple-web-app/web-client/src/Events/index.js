/* global */

import * as React from 'react'
import { compose } from 'recompose'
import Event from './../Event/index.js'
import { Query } from 'react-apollo'
import QUERY from './queries'
import Loading from '../Loading/index.js'

import {
  Main
} from './styles'

const enhance = compose()

const Events = enhance(props => {
  return (
    <Main>
      <Query query={QUERY} >
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          else {
            const { events } = data
            return events.map((event, i) => (<Event key={i} event={event} />))
          }
        }}
      </Query>
    </Main>
  )
})

export default Events
