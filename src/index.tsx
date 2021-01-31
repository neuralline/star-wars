import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const uri = 'https://graphql.org/swapi-graphql'

const link = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([link, new HttpLink({ uri: uri })])
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
