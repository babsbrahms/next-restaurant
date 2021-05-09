import React from 'react'
import Head from "next/head"

const Header = ({ title, description, keywords }) => {
    return (
        <Head>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <title>{title}</title>
        </Head>
    )
}

Header.defaultProps = {
    title: "Next Restaurant",
    description: "We deliver the food you buy!",
    keywords: "restaurants, delivery"

}

export default Header
