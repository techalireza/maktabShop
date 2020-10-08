import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import CardProduct from '../CardProduct/CardProduct'
import './ShowProduct.scss'
import { fetchApi } from '../../Redux/productRedux/product.thunk'
import { Col, Row } from 'react-bootstrap'
import ShowOneCategory from '../../Views/ShowOneCategory/ShowOneCategory'


function ShowProduct({ methode, attribut, fetchApi, categoryID }) {

    const products = useSelector(state => state.product.products)
    const pending = useSelector(state => state.product.pending)

    useEffect(() => {
        fetchApi(methode, attribut, categoryID)
        console.log("category : ", products)
    }, [])

    return (
        <div className="overflow-hidden">
            {
                pending ? <p>loading</p> :
                    categoryID == 'categoryList' ?
                        <Row>
                            {products[categoryID].map(item =>
                                <Col xs={12} md={6} lg={3}>
                                    <Link to={`/products/${item.id}`}>
                                        <CardProduct item={item} />
                                    </Link>
                                </Col>
                            )}
                        </Row>
                        :
                        <div className="my-row overflow-x-scroll">
                            {products[categoryID].map(item =>
                                <div className="my-col" key={item.id}>
                                    <Link to={`/products/${item.id}`}>
                                        <CardProduct item={item} />
                                    </Link>
                                </div>
                            )}
                        </div>
            }
        </div>
    )
}

export default connect(null, { fetchApi })(ShowProduct)


