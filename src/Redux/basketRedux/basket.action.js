import types from './basket.type'

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
