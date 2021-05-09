import React from 'react';
import { useRouter } from "next/router";
import Header from "../../container/Header"
import Head from 'next/head';

const RestaurantName = () => {
    const router = useRouter();
    let name = router.query.name;
    return (
        <div>
            <Header title={name} />
            
            {name}
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


export async function getStaticPaths () {
	try {
		let { data: { data , errors } } =  await axios({
			url: "https://graphql.fauna.com/graphql",
			method: "POST",
			headers: {
			"Authorization": `Bearer ${process.env.FAUNA_KEY}`
			},
			data: {
				query: `
					query($name: String!) {
						getRestaurantByName(name: $name) {
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
	
		let paths = data.restaurants.data.map(res => ({ params: { name: res.name }}));

		console.log(paths)

		return {
			props: {
                paths,
                fallback: false
			}
		}
	} catch (error) {
		if (error) {
			return {
				redirect: {
				  destination: '/',
				  permanent: false,
				},
			}
		}
	}
}
export default RestaurantName;
