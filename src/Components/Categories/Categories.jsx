import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import api from '../../api/api'
import './Categories.scss'
function Categories() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        api.get('products/categories', {
            parent: 0
        }).then((response) => {
            setCategories(response.data)
        })
    }, [])
    return (
        <div className="categories">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <h2 className="header-cat">دسته بندی ها</h2>
                    </Col>
                    {
                        categories.map(item =>
                            item.name.length > 14 ?
                                <Col className="my-cat-col" xs={2} lg={1} key={item.id}>
                                    <Link to={`/category/${item.id}`} className="my-cat-link">
                                        <div>{item.name}</div>
                                    </Link>
                                    <img className="w-50 d-flex mt-0 mx-auto" src={item.image.src} alt="" />
                                </Col> :
                                <Col className="my-cat-col" xs={2} lg={1} key={item.id}>
                                    <Link to={`/category/${item.id}`} className="my-cat-link">
                                        <div>{item.name}</div>
                                    </Link>
                                    <img className="w-50 d-flex my-mt-2 mt-lg-3 mx-auto" src={item.image.src} alt="" />
                                </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Categories
