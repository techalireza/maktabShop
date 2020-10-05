import { combineReducers } from 'redux';
import productReducer from './productRedux/product.reducer';

export default combineReducers({
    product: productReducer,
})