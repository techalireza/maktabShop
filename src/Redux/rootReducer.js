import { combineReducers } from 'redux';
import productReducer from './productRedux/product.reducer';
import basketReducer from './basketRedux/basket.reducer'

export default combineReducers({
    product: productReducer,
    basket: basketReducer,
})