import React, { useState, useEffect } from 'react'
import api from '../../api/api'
import CardProduct from '../CardProduct/CardProduct'
import {Row , Col , Container} from 'react-bootstrap'
import ProductCrousel from '../ProductCrousel/ProductCrousel';
import DescriptionProduct from '../DescriptionProduct/DescriptionProduct'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ShowOneProduct({ methode, attribut }) {
    const [product, setProduct] = useState({ images: [{ 0: "" }] });
    useEffect(() => {
        api.get(methode, attribut).then(response => {
            setProduct(response.data)
        })
    }, [])
    return (
        <div className="my-container bg-white my-5 overflow-hidden">
            <Row>
                <Col xs={12} lg={6} className="my-3">
                    <ProductCrousel images={product.images} />
                </Col>
                <Col xs={12} lg={6} className="my-3 pr-lg-0 pl-lg-3">
                    <DescriptionProduct product={product} />
                </Col>
            </Row>
        </div>
    )
}

export default ShowOneProduct
