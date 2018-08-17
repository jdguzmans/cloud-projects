import gql from 'graphql-tag'

export const CREATE = gql`
mutation ($email: String!, $password: String!) {
  signin (email: $email, password: $password)
}
`

export const EDIT = gql`
mutation ($email: String!, $password: String!) {
  signup (email: $email, password: $password)
}
`
