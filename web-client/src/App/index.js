/* global localStorage */

import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'
import { HashRouter as Router, Route } from 'react-router-dom'
import { BACKEND_URL, TOKEN_KEY } from '../config'

import Login from '../Login/index.js'
import Home from '../Home/index.js'

import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

import './styles.css'

const httpLink = createHttpLink({
  uri: BACKEND_URL
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(TOKEN_KEY)

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path='/' component={Login} />
            <Route path='/home' component={Home} />
          </div>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
