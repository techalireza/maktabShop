import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Row , Col} from 'react-bootstrap'
import api from '../../api/api'
import ShowOneProduct from '../../Components/ShowOneProduct/ShowOneProduct'

function SingleProducts() {
    const { id } = useParams();
    const [attribut, setAttribut] = useState({})
    
    return (
        <div>
            <ShowOneProduct methode={`products/${id}`} attribut={attribut} />
        </div>
    )
}

export default SingleProducts


