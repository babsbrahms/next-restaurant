import React, { useContext } from "react"
import axios from "axios";
import Link from "next/link";
import { Card } from "../container/Card"
import { RootContext } from "../context/RootProvider"


function Home({ restaurants }) {
	const { addDiscount, discount } = useContext(RootContext)
  if (!restaurants) {
    return <h3>Loading</h3>
    
  }
  return (
    <div>
		<h1 className="header">Restaurants</h1>

		<p className="sub-header">
			Order your food and we will deliver!
		</p>
		
		<br />
		<br />
		<br />

		<section className="jobotron">
			<h1>
				Discount
			</h1>
			<p>Get 10% off your first order!</p>
			<button onClick={() => addDiscount()}>
			 	{discount? "Discount Added" : "Get Discount"}	
			</button>
		</section>
		<p className="sub-header">
			<b>
				Choose a restaurant
			</b>
		</p>
		<section className="card-container">
		{restaurants && restaurants.map(({ name, description, logo, _id }) => (
			<Link key={_id} href="/restaurants/[name]" as={`/restaurants/${name}`}> 
				<a>
					<Card>
						<h2>{name}</h2>
						<p>{description}</p>
					</Card>
				</a>
			</Link>
        ))}
		</section>



      <style jsx>
		{`	
			.card-container {
				display: grid;
				grid-template-columns: repeat(3, 2fr);
				column-gap: 1em;
			}
			
			.header {
				margin-top: 25px;
				text-align: center;
				font-size: 40px;
			}

			.sub-header {
				margin-top: 20px;
				text-align: center;
				font-size: 24px;
			}

			.jobotron {
				width: 100%;
				min-height: 10px;
				padding: 20px;
				padding-left: 50px;
				background-color: black;
				border-radius: 10px;
				margin-bottom: 30px;
				color: white;
				box-shadow: 2px 2px 5px #111;
			}

			.jobotron h1 {
				padding: 0px;
				margin: 0px;
			}

			.jobotron button {
				padding: 10px;
				margin: 0px;
				font-size: 16px;
				border-radius: 5px;
				transition: background-color 0.5s ease;
				cursor: pointer;
			}

			.jobotron button:hover {
				background-color: #ee9ca7;
			}

			@media screen and (max-width: 768px) {
				.card-container {
					grid-template-columns: repeat(1, 2fr);
				}
			}

			@media screen and (min-width: 769px) {
				.card-container {
					grid-template-columns: repeat(3, 2fr);
				}
			}

		`}
      </style>
    </div>
  )
}


export async function getStaticProps () {
	try {
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
				variables: {}
			}
		})
	
		let restaurants = data.restaurants.data;

		// console.log(restaurants)
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
			},
			revalidate: 1
		}
	} catch (error) {
		return {
			props: {
				restaurants: []
			}
		}
	}
}


export default Home;