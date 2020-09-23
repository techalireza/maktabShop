import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import ShowProduct from '../ShowProduct/ShowProduct'
import './BestSaleProduct.scss'
import api from '../../api/api'

function NewsProduct({ cat }) {
    const [attribut, setAttribut] = useState({ ...cat, orderby: 'date' })
    const [catName, setCatName] = useState("")
    const [categories, setCategories] = useState([])
    useEffect(() => {
        api.get('products/categories', {
            parent: 0
        }).then((response) => {
            console.log(response.data)
            setCategories(response.data)
        })
    }, [])
    useEffect(() => {
        categories.map(item => item.id == cat.category &&
            setCatName(item.name)
        )
    }, [])
    return (
        <Container fluid className="sale-container">
            <div className="text-right sale-text">
                <span>پر فروش ترین {catName}</span>
            </div>
            <Container fluid className="overflow-auto">
                <div className="my-row py-3 best-sale">
                    {
                        <ShowProduct methode='products' attribut={attribut} />
                    }
                </div>
            </Container>
        </Container>
    )
}

export default NewsProduct