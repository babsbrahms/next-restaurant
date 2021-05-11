import React, { useContext, useEffect, useRef, useState } from 'react';
import { RootContext } from "../context/RootProvider"
import { OrderList } from "../container/OrderList"

const order = () => {
    const { orders, addOrder, removeOrder, discount, clearOrder } = useContext(RootContext)
    let price = orders.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)
    const unUser = useRef(null)
    const [placed, setPlaced] = useState(false)
    useEffect(() => {
      
      () => {
        if (unUser.current) {
            clearTimeout(unUser.current)
        }
      }  
    }, [placed])

    const placeOrder = () => {
        setPlaced(true)
        unUser.current = setTimeout(() => {
            clearOrder()
        }, 3000)
    }


    return (
        <div>
            <h1 className="header">Your Order</h1>

            {(orders.length === 0) && (<p className="sub-header">You have'nt ordered any food!</p>)}
            {(orders.length > 0) && (
            <div>

                <section className="card-container">
                    {orders.map(order => (
                        <div key={order._id}>
                            <OrderList 
                                order={order} 
                                increment={(menu) => addOrder(menu)}
                                decrement={(menuId) => removeOrder(menuId)} 
                            />
                        </div>
                    ))}
                </section>
                <section className="jobotron">
         
                    <p>tax: ${Number(0.1 * price).toFixed(2)}</p>
                    <p>discount: ${ discount? Number(0.1 * price).toFixed(2): 0}</p>
                    <p>price: ${Number(price).toFixed(2)}</p>
                    <h1>
                        Total price: ${discount?  Number(price).toFixed(2): Number(price + (0.1 * price)).toFixed(2)}
                    </h1>
                    <button onClick={() => placeOrder()}>
                        {placed? "Order Received" : "Place Order" }  
                    </button>
                </section>
                
            
            </div>)}

            <style jsx>
                {`
                    .card-container {
                        display: grid;
                        grid-template-columns: 1fr;
                        column-gap: 1em;
                    }

                    .card-container div:first-child {
                        border-radius: 15px 15px 0 0;
                    }

                    .card-container div {
                        // background-color: #CCC;
                        border-bottom: solid 1px black;
                        padding: 10px;
                        transition: background 0.5s ease-in-out;
                    }

                    .card-container div:hover {
                        background: #ffdde1;
                    }

                    // .card-container div:nth-child(odd) {
                    //     background-color: #333
                    // }
                    // .card-container div:nth-child(odd):hover {
                    //     background-color: white;
                    // }
                    
                    .card-container div:last-child {
                        border-radius: 0 0 15px 15px;
                        border-bottom: solid 0px black;
                    }

                    .header {
                        margin-top: 10px;
                        text-align: center;
                        font-size: 40px;
                        margin-bottom: 35px;
                    }
        
                    .sub-header {
                        margin-top: 100px;
                        text-align: center;
                        font-size: 24px;
                    }

                    .jobotron {
                        margin-top: 30px;
                        width: 100%
                        min-height: 10px;
                        padding: 20px;
                        padding-left: 50px;
                        padding-right: 50px;
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
                        margin-top: 15px;
                        width: 100%;
                        padding: 10px;
                        font-size: 16px;
                        border-radius: 5px;
                        transition: background 0.5s ease;
                        cursor: pointer;
                    }
        
                    .jobotron button:hover {
                        background: #ee9ca7;
                    }

                    
                
                `}
            </style>
        </div>
    )
}

export default order;
