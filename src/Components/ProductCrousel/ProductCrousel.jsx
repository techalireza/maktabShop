import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import './ProductCrousel.scss'

function ProductCrousel({ images }) {
    return (
        <Carousel useKeyboardArrows={true} swipeable={true} dynamicHeight={true} emulateTouch={true} showThumbs={true} 
        showArrows={true} showStatus={false} showIndicators={false} infiniteLoop={false}
        autoPlay={false} stopOnHover={false} className="dir-ltr left-border" >
            {
                images.map(item =>
                    <div key="item.id" className="h-27rem">
                        <img alt="" src={item.src} style={{height: '100%', objectFit: 'contain'}}/>
                    </div>
                )
            }
        </Carousel>
    )
}

export default ProductCrousel
