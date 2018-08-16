import gql from 'graphql-tag'

export default gql`
  query {
    events {
      id
      place
      address
      startDate
      finishDate
      isVirtual
      category {
        id
        name
        color
      }
    }
  }
`
