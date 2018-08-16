import gql from 'graphql-tag'

export default gql`
  query {
    eventCategories {
      id
      name
      color
    }
  }
`
