import React, { useContext } from 'react';
import Link from "next/link"
import { RootContext } from "../context/RootProvider"


const NavBar = () => {
    const { orders } = useContext(RootContext)
    return (
        <div className="cont">
            <Link href="/" >
                <h1 className="lead">
                    Next 
                </h1>
            </Link>

            

            <Link href="/order" >
                <div className="order">
                Order 
                <span>{orders.length}</span>
                </div>
            </Link>


            <style jsx>
                {`
                    .cont {
                        background-color: black;
                        width: 100%;
                        min-height: 40px;
                        padding: 20px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        position: fixed;
                        top; 0;
                        left: 0;
                        box-shadow: 2px 2px 5px #111;
                    }
                
                    .lead {
                        color: white;
                        padding: 0px;
                        margin: 0px;
                        font-size: 24px;
                        cursor: pointer;
                    }

                    .order {
                        color: white;
                        padding: 0px;
                        margin: 0px;
                        font-size: 16px;
                        cursor: pointer;
                    }


                    
                    .order span {
                        color: white;
                        padding: 2px 6px;
                        font-size: 14px;
                        cursor: pointer;
                        background-color: #ee9ca7;
                        border-radius: 4px
                    }

                    
                `}
            </style>
        </div>
    )
}

export default NavBar
