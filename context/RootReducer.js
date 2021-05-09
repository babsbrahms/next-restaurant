
const initialState = {
    name: "",
    address: "",
    orders: []
}

export default function RootReducer (state = initialState, action) {
    switch (action.type) {
        case "ADD_USER_NAME":
            
            return {
                ...state,
                name: action.payload
            };

        case "ADD_USER_EMAIL":
            
            return {
                ...state,
                email: action.payload
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