import React from 'react'
import { connect } from 'react-redux'

import { removeFromBasket } from '../../Redux/basketRedux/basket.action'

function Basket({ basketList, removeFromBasket }) {
    return (
        <div>
            {
                console.log("basketList : ", basketList)
            }
            {
                basketList.map(item => 
                    <>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                    </>
                )
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        basketList: state.basket.baskets
    }
}
export default connect(mapStateToProps, { removeFromBasket })(Basket)