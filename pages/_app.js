import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from "@apollo/client/react"
import '../styles/globals.css';

// https://graphql.fauna.com/graphql

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
