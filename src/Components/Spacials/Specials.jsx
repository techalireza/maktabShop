import React, { useState, useEffect } from 'react'

import ShowProduct from '../ShowProduct/ShowProduct'
import specials from '../../Asset/img/specials.png'
import './Specials.scss'

function Specials({cat}) {
    const [attribut, setAttribut] = useState({ ...cat, on_sale: true })
    
    return (
        <div className="bg-specials">
            <div className="my-row py-3">
                <img src={specials} className="specials-img" alt="" />
                {
                    <ShowProduct methode='products' attribut={ attribut } />
                }
            </div>
        </div>
    )
}

export default Specials
