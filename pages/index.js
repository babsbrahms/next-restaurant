import React from "react"
import axios from "axios"
import { gql, useQuery, useMutation } from "@apollo/client";
import { ApolloConsumer } from "@apollo/client/react"


let EXCHANGE_RATE = gql`
  query {
    rates(currency: "USD") {
      rate
      name
      currency
    }
  }
`
function Home({ restaurants }) {
  console.log(restaurants)
  if (!restaurants) {
    return <h3>Loading</h3>
    
  }
  return (
    <div>
      Home
      <ul>
        {restaurants && restaurants.map(({ name, description, logo, _id }) => (
          <li key={_id}>
            <h1>{name}</h1>
            <em>{email}</em>
            <p>{address}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}


export async function getStaticProps () {
  // const { data, error, loading } = useQuery(EXCHANGE_RATE)

  let { data: { data , errors } } =  await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
       "Authorization": `Bearer ${process.env.FAUNA_KEY}`
    },
    data: {
       query: `
       query {
        restaurants {
         data {
           name
           description
           logo
           _id
         }
       }
     }
     `,
       variables: {
         
       }
     }
  })

  let restaurants = data.restaurants.data

  if (errors) {
   return {
      notFound: true, // 404
      // redirect: {
      //   destination: '/',
      //   permanent: false,
      // },
   }
  }
  return {
    props: {
      restaurants
    }
  }
}


export default Home;