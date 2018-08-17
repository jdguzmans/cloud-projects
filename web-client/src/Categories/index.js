/* global */

import * as React from 'react'
import { compose } from 'recompose'
import Category from './../Category/index.js'
import { Query } from 'react-apollo'
import QUERY from './queries'
import Loading from '../Loading/index.js'

import {
  Main
} from './styles'

const enhance = compose()

const Categories = enhance(props => {
  return (
    <Main>
      <Query query={QUERY} >
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          else {
            const { eventCategories } = data
            return eventCategories.map((category, i) => (<Category key={i} category={category} />))
          }
        }}
      </Query>
    </Main>
  )
})

export default Categories
