import types from './product.type'

const product = {
    products: {
        'all': [], 'supers': [], 'digis': [], 'news': [], 'dresses': [], 'books': [], 'sales': [], 'categoryList': [], 'search': []
    },
    loading: true,
    error: {},
}

const productReducer = (state = product, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SET_PRODUCTS_START:
            return {
                ...state,
                loading: true,
                error: product.error,
            }
        case types.SET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: { ...state.products, [payload.categoryID]: payload.products },
                loading: false,
                error: product.error,
            }
        case types.SET_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default productReducer;
