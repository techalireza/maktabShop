import types from './basket.type'

const basket = {
    baskets: [],
}

const basketReducer = (state = basket, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_TO_BASKET_PRODUCTS:
            return {
                ...state,
                baskets: [...basket.baskets, payload]
            }
        case types.EDIT_BASKET_PRODUCTS:
            return {
                ...state,
                baskets: basket.baskets.map(item => item.id === payload.id ? payload : item)
            }
        case types.REMOVE_FROM_BASKET_PRODUCTS:
            return {
                ...state,
                baskets: basket.baskets.filter(item => item.id !== payload)
            }
        default:
            return state;
    }
}
export default basketReducer