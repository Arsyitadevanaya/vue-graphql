import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization:import.meta.env.API_KEY ? `Bearer ${import.meta.env.API_KEY}` : "",
    }
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default apolloClient
