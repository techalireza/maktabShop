import types from './product.type'

const product = {
    products: {
        'all': [], 'supers': [], 'digis': [], 'news': [], 'dresses': [], 'books': [], 'sales': [], 'categoryList': [], 'search': []
    },
    basket: [],
    loading: true,
    error: {},
}

const productReducer = (state = product, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SET_PRODUCTS_START:
            return {
                ...product,
                basket:product.basket,
                loading: true,
                error: product.error,
            }
        case types.SET_PRODUCTS_SUCCESS:
            return {
                ...product,
                products: { ...state.products, [payload.categoryID]: payload.products },
                basket:product.basket,
                loading: false,
                error: product.error,
            }
        case types.SET_PRODUCTS_ERROR:
            return {
                ...product,
                basket:product.basket,
                loading: false,
                error: payload
            }
        case types.ADD_TO_BASKET_PRODUCTS:
            return {
                ...product,
                loading: false,
                basket: [...product.basket, payload]
            }
        case types.EDIT_BASKET_PRODUCTS:
            return {
                ...product,
                loading: false,
                basket: product.basket.map(item => item.id === payload.id ? payload : item)
            }
        case types.REMOVE_FROM_BASKET_PRODUCTS:
            return {
                ...product,
                loading: false,
                basket : product.basket.filter(item => item.id !== payload)
            }
        default:
            return state;
    }
}

export default productReducer;
