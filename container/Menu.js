import React, { useContext } from 'react'
import styles from "../styles/Menu.module.css";
import { RootContext } from "../context/RootProvider"


export const Menu = ({ menu, restaurant }) => {
    const { addOrder } = useContext(RootContext);
    return (
        <div className={styles.menu}>
            <h2>{menu.name}</h2>
            <p>${menu.price}</p>

            <button className={styles.button} onClick={() => addOrder({ ...menu, restaurant })}>Add To Order</button>

            
        </div>
    )
}
