import types from './product.type'

export const setProductsStart = () => (
    {
        type : types.SET_PRODUCTS_START,
    }
)

export const setProductsSuccess = (products , categoryID) => (
    {
        type : types.SET_PRODUCTS_SUCCESS,
        payload : {products , categoryID}
    }
)

export const setProductsError = (error) => (
    {
        type : types.SET_PRODUCTS_ERROR,
        payload : error,
    }
)

export const addToBasket = (product) => (
    {
        type : types.ADD_TO_BASKET_PRODUCTS,
        payload : product,
    }
)

export const editBasket = (product) => (
    {
        type : types.EDIT_BASKET_PRODUCTS,
        payload : product,
    }
)

export const removeFromBasket = (id) => (
    {
        type : types.REMOVE_FROM_BASKET_PRODUCTS,
        payload : id,
    }
)
