import React from 'react'

export const OrderList = ({ order, increment, decrement }) => {
    return (
        <div>
            <h2 className="food">{order.name}</h2>
            <small className="restaurant">{order.restaurant.name}</small>
            <span className="price">${Number(order.price * order.qty).toFixed(2)}</span>
            <div className="calc">
                <button className="btn" onClick={() => increment(order)}>+</button> 
                <span className="qty">{order.qty}</span> 
                <button className="btn" onClick={() => decrement(order._id)}>-</button>
            </div>
            

            <style jsx>
                {`
                    .food {
                        margin: 0px;
                        padding: 0px;
                        text-align: left;
                        font-size: 30px;
                    }
        
                    .restaurant {
                        color: #333;
                    }

                    .price {
                        display: block;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        text-align: left;
                        font-size: 24px;
                    }

                    .calc {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align-items: center;
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
