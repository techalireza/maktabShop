import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'

import './CardProduct.scss'

function CardProduct({ item }) {
    return (
        <div className="card-product">
            {
                item.price === item.regular_price ?
                    <Card className="my-card">
                        <Card.Img variant="top" className="my-card-img" src={item.images[0].src} />
                        <Card.Body className="my-card-body p-3">
                            <Card.Title className="my-card-title">{item.name}</Card.Title>
                            <del className="my-del-tag"></del>
                            <Card.Body className="my-card-price">
                                {item.price}
                                <span>تومان</span>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                    :
                    <Card className="my-card">
                        <Card.Img variant="top" className="my-card-img" src={item.images[0].src} />
                        <Card.Body className="my-card-body p-3">
                            <Card.Title className="my-card-title">{item.name}</Card.Title>
                            <del className="my-del-tag">{item.regular_price}</del>
                            <Badge pill variant="danger">
                                {Math.round(((item.regular_price - item.price) / item.regular_price) * 100)}%
                        </Badge>
                            <Card.Body className="my-card-price">
                                {item.price}
                                <span>تومان</span>
                            </Card.Body>
                        </Card.Body>
                    </Card>
            }
        </div>
    )
}

export default CardProduct

