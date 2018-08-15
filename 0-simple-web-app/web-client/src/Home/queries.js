import gql from 'graphql-tag'

export default gql`
  query {
    eventCategories {
      id
    }
    events {
      id
    }
  }
`
