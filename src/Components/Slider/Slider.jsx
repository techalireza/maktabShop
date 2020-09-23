import React from 'react'
import { Carousel, Container } from 'react-bootstrap'

import './Slider.scss'

import slider1 from '../../Asset/img/slider1.jpg'
import slider2 from '../../Asset/img/slider2.jpg'
import slider3 from '../../Asset/img/slider3.jpg'

function Slider() {
    return (
        <Container fluid className="px-lg-0 my-3">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Slider
