import { useQuery } from '@apollo/client'
import { FC } from 'react'
import { ALL_PEOPLE } from './graphql/query'

const App: FC = () => {
  const { loading, error, data } = useQuery(ALL_PEOPLE)

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error while fetching...</div>}
      {error && console.log(error)}

      <h2>allStarships</h2>
      <div>
        {data !== undefined &&
          data.allStarships.map((item: any, id: number) => (
            <p key={id}>{item.name}</p>
          ))}
      </div>
    </div>
  )
}

export default App
