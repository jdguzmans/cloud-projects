import gql from 'graphql-tag'

export const SIGNIN = gql`
  mutation ($email: String!, $password: String!) {
    signin (email: $email, password: $password)
  }
`

export const SIGNUP = gql`
  mutation ($email: String!, $password: String!) {
    signup (email: $email, password: $password)
  }
`
