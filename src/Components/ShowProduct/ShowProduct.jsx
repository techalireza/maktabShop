import React, { useEffect, useState } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'

import api from '../../api/api'
import CardProduct from '../CardProduct/CardProduct'
import './ShowProduct.scss'

function ShowProduct({ methode, attribut }) {
    const [products, setProducts] = useState([])
    const [pending, setPending] = useState(true)
    useEffect(() => {
        api.get(methode, attribut)
            .then((response) => {
                setProducts(response.data)
                setPending(false)
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }, [])

    return (
        <div className="my-row overflow-x-scroll">
            {
                pending ? <p>loading</p> :
                    products.map(item =>
                        <div className="my-col" key={item.id}>
                            <CardProduct item={item} />
                        </div>
                    )
            }
        </div>

    )
}

export default ShowProduct

