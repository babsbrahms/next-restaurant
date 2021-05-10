import React, { useContext } from 'react'
import styles from "../styles/Memu.module.css";
import { RootContext } from "../context/RootProvider"


export const Menu = ({ menu, restaurant }) => {
    console.log(menu)
    const { addOrder } = useContext(RootContext);
    return (
        <div style={styles.menu}>
            {(menu) && <h2>{menu.name}</h2>}
            {(menu) && (<p>${menu.price}</p>)}

            <button className={styles.button} onClick={() => addOrder({ ...menu, restaurant })}>Add To Order</button>
        </div>
    )
}
