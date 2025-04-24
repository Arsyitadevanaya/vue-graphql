import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlzcyI6Imh0dHBzOi8vb3JpZW5zc3RhZ2luZy5vcmllbnMubXkuaWQ6MzUwMCIsImlhdCI6MTc0NDYxMTk4MiwibmJmIjoxNzQ0NjExOTgyLCJqdGkiOiI1OTUxYjgyYS04MGZlLTQ3Y2YtOTE3NC1jNTRlMWJlN2NmYTgiLCJleHAiOjE3NDQ2OTgzODJ9.39ym6x-nL7YY-2MV08bB4Tvq21iIIToQFbKy7e5OgEY`,
    }
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default apolloClient
