import React, { createContext, useReducer } from "react";
import RootReducer from "./RootReducer";

const initialState = {
    mobile: "",
    address: "",
    orders: [],
    discount: false
};


export const RootContext = createContext(initialState)


export default function RootProvider ({ children }) {
    const [state, dispatch] = useReducer(RootReducer, initialState)

    const addUserMobile = (mobile) => {
        dispatch({
            type: "ADD_USER_MOBILE",
            payload: mobile
        })
    }

    const addUserAddress = (address) => {
        dispatch({
            type: "ADD_USER_ADDRESS",
            payload: address
        })
    }

    const addOrder = (memu) => {
        dispatch({
            type: "ADD_ORDER",
            payload: memu
        })
    }


    const removeOrder = (menuId) => {
        dispatch({
            type: "REMOVE_ORDER",
            payload: menuId
        })
    }

    const clearOrder = () => {
        dispatch({
            type: "CLEAR_ORDER"
        })
    }

    const addDiscount = () => {
        dispatch({
            type: "ADD_DISCOUNT"
        })
    }

    return (
        <RootContext.Provider value={{
            name: state.name,
            address: state.address,
            orders: state.orders,
            discount: state.discount,
            addOrder,
            removeOrder,
            clearOrder,
            addUserAddress,
            addUserMobile,
            addDiscount
        }}>
            {children}
        </RootContext.Provider>
    )
}