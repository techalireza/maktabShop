import React, { useState, useEffect } from 'react'

import ShowProduct from '../ShowProduct/ShowProduct'
import './Specials.scss'

function Specials({cat , img , categoryID}) {
    const [attribut, setAttribut] = useState({ ...cat, on_sale: true })
    return (
        <div className={cat.category == 81 ? "bg-vegetable-category" :  "bg-specials"}>
            <div className="my-row py-3">
                <img src={img} className="specials-img" alt="" />
                {
                    <ShowProduct methode='products' attribut={ attribut } categoryID={categoryID} />
                }
            </div>
        </div>
    )
}

export default Specials
