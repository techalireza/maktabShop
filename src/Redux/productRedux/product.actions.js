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