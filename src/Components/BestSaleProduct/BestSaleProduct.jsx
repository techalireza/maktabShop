import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import ShowProduct from '../ShowProduct/ShowProduct'
import './BestSaleProduct.scss'
import api from '../../api/api'

function NewsProduct({ cat , name , categoryID }) {
    // const [attribut, setAttribut] = useState({ ...cat })
    
    return (
        <Container fluid className="sale-container">
            <div className="text-right sale-text">
                <span>{name}</span>
            </div>
            <div className="overflow-auto px-0 px-lg-3">
                <div className="my-row best-sale">
                    {
                        <ShowProduct methode='products' attribut={cat} categoryID={categoryID} />
                    }
                </div>
            </div>
        </Container>
    )
}

export default NewsProduct