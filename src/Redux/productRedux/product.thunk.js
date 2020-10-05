import * as action from './product.actions'
import api from '../../api/api'

export const fetchApi = (methode, attribut , categoryID) => {
    return (dispatch) => {
        dispatch(action.setProductsStart());
        api.get(`${methode}`, attribut).then(response => {
            dispatch(action.setProductsSuccess(response.data , categoryID));
        }).catch(error => {
            dispatch(action.setProductsError(error))
        })
    }
}


