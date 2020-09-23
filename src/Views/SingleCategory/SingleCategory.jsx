import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Row , Col} from 'react-bootstrap'
import api from '../../api/api'
import ShowProduct from '../../Components/ShowProduct/ShowProduct'

function SingleCategory({ }) {
    const { id } = useParams();
    const [attribut, setAttribut] = useState({ category: id})
    
    return (
        <ShowProduct methode='products' attribut={attribut} />
    )
}

export default SingleCategory
