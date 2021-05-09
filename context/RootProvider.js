import React, { createContext, useReducer } from "react";
import RootReducer from "./RootReducer";

const initialState = {
    name: "",
    address: "",
    orders: [1,2,3]
};


export const RootContext = createContext(initialState)


export default function RootProvider ({ children }) {
    const [state, dispatch] = useReducer(RootReducer, initialState)

    const addUserName = (name) => {
        dispatch({
            type: "ADD_USER_NAME",
            payload: name
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


    return (
        <RootContext.Provider value={{
            name: state.name,
            address: state.address,
            orders: state.orders,
            addOrder,
            removeOrder,
            clearOrder,
            addUserAddress,
            addUserName
        }}>
            {children}
        </RootContext.Provider>
    )
}