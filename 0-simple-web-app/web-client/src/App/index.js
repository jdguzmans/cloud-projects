import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { HashRouter as Router, Route } from 'react-router-dom'
import config from '../config'

import Login from '../Login/index.js'
import './styles.css'

const client = new ApolloClient({
  uri: config.BACKEND_URL
})

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact path='/' component={Login} />
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
