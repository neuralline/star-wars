import { gql } from '@apollo/client'

export const ALL_STARSHIP = gql`
  query allStarships {
    allStarships {
      starships {
        name
      }
    }
  }
`

export const ALL_PEOPLE = gql`
  query {
    allPeople {
      people {
        name
        birthYear
      }
    }
  }
`
