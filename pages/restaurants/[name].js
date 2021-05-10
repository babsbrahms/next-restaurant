import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useRouter } from "next/router";
import Header from "../../container/Header";
import { Menu } from "../../container/Menu";
import styles from "../../styles/Restaurant.module.css"


const RestaurantName = ({ restaurant }) => {

	const [memus, setMemus] = useState([1,2,3,4])
	useEffect(() => {
		if (restaurant._id) {
			console.log("called> ",  restaurant._id)
			const getMemu =  async() => {
				
				let res= await axios.get(`http://localhost:3000/api/memus/${restaurant._id}`)

				console.log("memu: ", res.data.memus)
				setMemus(res.data.memus)
			}

			

			getMemu();
		}
	})

	console.log(restaurant)
    const router = useRouter();
    let name = router.query.name;
    return (
        <div className={styles.container}>
            <Header title={name} description={restaurant.description} />
			<h1 className={styles.header}>{restaurant.name}</h1>
			<img className={styles.img} src={restaurant.logo} width="80%" height="auto" />
			<p className={styles.sub_header}>{restaurant.description}</p>

			<h3 className={styles.menu_header}>Menus</h3>

			<section className={styles.memu_container}>
				{memus && memus.map((memu) => (
					<Menu key={memu._id} memu={memu} restaurant={restaurant} />
				))}
			</section>
        </div>
    )
}

export async function getStaticProps (context) {
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
						getRestaurantByName (name: $name) {
							name
							description
							logo
							_id
							memus {
								data {
									_id
									name
									price
									photo
								}
							}
						}
					}
				`,
				variables: {
					name: context.params.name
				}
			}
		})
	
		let restaurant = data.getRestaurantByName;

		return {
			props: {
				restaurant
            },
            // revalidate: 1
		}
	} catch (error) {
		return {
			props: {
				restaurant: {}
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
	
		let paths = data.restaurants.data.map(res => ({ params: { name: res.name }}));

		// console.log(paths)

		return {
			paths,
			fallback: true
		}
	} catch (error) {
	//	console.log("my err: ", error)
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
