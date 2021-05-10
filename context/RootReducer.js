
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
            
            return state;
        case "REMOVE_ORDER":
            
            return state;
        case "CLEAR_ORDER":
            
            return state;
        default:
            return state;
    }
}