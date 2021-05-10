import React, { useContext } from 'react'
import styles from "../styles/Menu.module.css";
import { RootContext } from "../context/RootProvider"
import order from '../pages/order';


export const Menu = ({ menu, restaurant }) => {
    const { addOrder, orders, removeOrder } = useContext(RootContext);
    return (
        <div className={styles.menu}>
            <h2>{menu.name}</h2>
            <p>${menu.price}</p>

            {orders.some(x => x._id === menu._id) && (
            <div className="calc">
                <small>add to order!</small>
            </div>
            )}

            <button className={styles.button} onClick={() => addOrder({ ...menu, restaurant })}>Add To Order</button>

            <style jsx>
                {`
                    .calc {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align-items: center;
                        color: #ee9ca7;
                    }

                    .qty {
                        padding-left: 5px;
                        padding-right: 5px;
                        font-size: 25px;
                        font-weigth: bolder;
                    }

                    .btn {
                        padding: 5px;
                        font-size: 15px;
                        border-radius: 50%;
                        width: 30px;
                        height: 30px;
                        font-weigth: bold;
                        background-color: #111;
                        color: white;
                        cursor: pointer
                    }
                `}
            </style>
        </div>
    )
}
