import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useRouter } from "next/router";
import Header from "../../container/Header";
import { Menu } from "../../container/Menu";
import styles from "../../styles/Restaurant.module.css";
import ErrorBoundary from "../../container/ErrorBoundary"


const RestaurantName = ({ restaurant }) => {
    const router = useRouter();
    let name = router.query.name;
	const [menus, setMenus] = useState([])
	useEffect(() => {
		const getMenu =  async() => {
			
			let res= await axios.get(`http://localhost:3000/api/menus/${name}`)

			console.log("menu: ", res.data)
			setMenus(res.data.menus)
		}

		getMenu();
	}, [])

	if (!restaurant) {
		return (
			<h1 className={styles.error}>Loading...</h1>
		)
	}

    return (
        <div className={styles.container}>
			<ErrorBoundary>
				<Header title={name} description={restaurant? restaurant.description : ""} />
				<h1 className={styles.header}>{restaurant.name}</h1>
				<img className={styles.img} src={restaurant.logo} width="80%" height="auto" />
				<p className={styles.sub_header}>{restaurant.description}</p>

				<h3 className={styles.menu_header}>Menus</h3>

				<section className={styles.menu_container}>
					{menus.map((menu) => (
						<Menu key={menu._id} menu={menu} restaurant={restaurant} />
					))}
				</section>
			</ErrorBoundary>
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

		if (!restaurant) {
			return {
				notFound: true,
				// redirect: {
				//   destination: '/',
				//   permanent: false,
				// },
			}
		}

		return {
			props: {
				restaurant
            },
            revalidate: 5
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
