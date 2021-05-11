import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from "@apollo/client/react"
import RootProvider from "../context/RootProvider"
import Header from "../container/Header";
import NavBar from "../container/NavBar"
import '../styles/globals.css';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <RootProvider>
      <Header />
      <NavBar />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="body" >
           <Component {...pageProps} />
      </div>
      </RootProvider>
      <style jsx>
        {`
          .body {
            padding: 30px;
          }
          .br {
            padding: 150px
          }
        `}
      </style>
    </ApolloProvider>
  )
}

export default MyApp
