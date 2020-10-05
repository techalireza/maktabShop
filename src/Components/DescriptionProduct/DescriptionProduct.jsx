import React from 'react'
import { Badge, Button } from 'react-bootstrap'

import { connect } from 'react-redux'
import { addToBasket } from '../../Redux/productRedux/product.actions'
import './DescriptionProduct.scss'

function DescriptionProduct({ product, basket, addToBasket }) {

    const handleBasket = () => {
        addToBasket(product);
        console.log("add to basket : " , basket)
    }

    const description = (product) => ({ __html: product.description });
    return (
        <div className="description-product d-flex flex-column justify-content-between">
            <h3 className="description-product-title pt-3">{product.name}</h3>
            <p dangerouslySetInnerHTML={description(product)} className="description-product-des my-5 ml-2"></p>
            {
                product.price === product.regular_price ?
                    <>
                        <div className="description-product-price">
                            <span className="description-product-price d-flex justify-content-between ml-4">
                                <div>
                                    <div className="description-product-price mt-2 mt-lg-0">
                                        {product.price}
                                        <span>تومان</span>
                                    </div>
                                </div>
                                <Button type="submit" onClick={handleBasket} className="my-button h-50 color-secondary px-25rem py-75rem product-button-sale">
                                    افزودن به سبد خرید
                                </Button>
                            </span>
                        </div>
                    </>
                    :
                    <>
                        <div className="description-product-price">
                            <span className="description-product-price d-flex justify-content-between ml-4">
                                <div>
                                    <div className="description-product-sale">
                                        <del className="description-product-del-tag">{product.regular_price}</del>
                                        <Badge pill variant="danger" className="mr-2">
                                            {Math.round(((product.regular_price - product.price) / product.regular_price) * 100)}%
                                        </Badge>
                                    </div>
                                    <div className="description-product-price">
                                        {product.price}
                                        <span>تومان</span>
                                    </div>
                                </div>
                                <Button type="submit" onClick={handleBasket} className="my-button h-50 color-secondary px-25rem py-75rem product-button-sale">
                                    افزودن به سبد خرید
                                </Button>
                            </span>
                        </div>
                    </>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        basket: state.product.basket,
    }
}
export default connect(mapStateToProps, { addToBasket })(DescriptionProduct)
