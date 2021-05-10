
const initialState = {
    mobile: "",
    address: "",
    orders: []
}

export default function RootReducer (state = initialState, action) {
    switch (action.type) {
        case "ADD_USER_MOBILE":
            
            return {
                ...state,
                mobile: action.payload
            };

        case "ADD_USER_ADDRESS":
            
            return {
                ...state,
                address: action.payload
            };

        case "ADD_ORDER":
            
            return {
                ...state,
                orders: [...state.orders, action.payload]
            };
        case "REMOVE_ORDER":
            let orders = state.orders;
            let index = orders.findIndex((x) => x._id === action.payload)
            return state;
        case "CLEAR_ORDER":
            
            return {
                ...state,
                orders: []
            };
        default:
            return state;
    }
}