
const initialState = {
    mobile: "",
    address: "",
    orders: [],
    discount: false
}

export default function RootReducer (state = initialState, action) {
    switch (action.type) {
        case "ADD_DISCOUNT":
            
            return {
                ...state,
                discount: true
            };
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

        case "ADD_ORDER": {
            let orders = state.orders;
            let index = orders.findIndex((x) => x._id === action.payload._id);

            if (index < 0) {
                return {
                    ...state,
                    orders: [...orders, { ...action.payload, qty: 1 }]
                };
            } else {
                orders[index] = {...orders[index], qty: orders[index].qty + 1 }
                return {
                    ...state,
                    orders: [...orders]
                };
            }
        }

        case "REMOVE_ORDER": {
            let orders = state.orders;
            let index = orders.findIndex((x) => x._id === action.payload)
            
            if (orders[index].qty <= 1) {
                orders.splice(index, 1)
                return {
                    ...state,
                    orders: [...orders]
                };
            } else {
                orders[index] = {...orders[index], qty: orders[index].qty - 1 }
                return {
                    ...state,
                    orders: [...orders]
                };
            }
        }
        case "CLEAR_ORDER":
            
            return {
                ...state,
                orders: []
            };
        default:
            return state;
    }
}