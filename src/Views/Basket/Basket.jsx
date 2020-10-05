import React from 'react'
import { connect } from 'react-redux'

import { removeFromBasket } from '../../Redux/productRedux/product.actions'

function Basket({ basketList, removeFromBasket }) {
    return (
        <div>
            {
                console.log("basketList : ", basketList)
            }
            this is a basket
        </div>
    )
}

const mapStateToProps = state => {
    return {
        basketList: state.product.basket
    }
}
export default connect(mapStateToProps, { removeFromBasket })(Basket)