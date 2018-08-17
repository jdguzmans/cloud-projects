// @flow

import * as React from 'react'
import { withRouter } from 'react-router'
import { Query, withApollo } from 'react-apollo'
import { compose, withHandlers, withState } from 'recompose'
import { Loading } from ''
import MUTATION from './mutations'
import QUERY from './queries'

import {
  Main
} from './styles'

const enhance = compose()

const OrderDetail = enhance(props => {
  const { match } = props
  return (
    <Query query={QUERY} variables={{ data: { uid: props.match.params.uid } }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />
        else {
          const { event } = data
          console.log(event)
          return (
            <Main>
              a
            </Main>
          )
        }
      }}
    </Query>
  )
})

export default OrderDetail
