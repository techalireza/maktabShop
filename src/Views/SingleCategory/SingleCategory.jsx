import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Row , Col} from 'react-bootstrap'
import api from '../../api/api'
import ShowProduct from '../../Components/ShowProduct/ShowProduct'

function SingleCategory({ }) {
    const { id } = useParams();
    const [attribut, setAttribut] = useState({ category: id , per_page:100})
    const [categoryLength, setCategoryLength] = useState([]);

    api.get('products',attribut).then(res => {
        setCategoryLength(res.data)
    })
    return (
        <div className="categories-container my-5 mx-auto">
            <ShowProduct methode='products' attribut={attribut} categoryID='categoryList' />
        </div>
    )
}

export default SingleCategory
