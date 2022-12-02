import '../App.css';


const intialState = {
    items: [
        { name: "Nike", unitPrice: 200 },
        { name: "Adidas", unitPrice: 150 },
        { name: "Puma", unitPrice: 300 },
        { name: "Rebok", unitPrice: 250 },
        { name: "Fila", unitPrice: 550 },
    ],
    cart: []
}


const mainReducer = (state = intialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.data]
            }
        default:
            return state;
    }
}

export default mainReducer;