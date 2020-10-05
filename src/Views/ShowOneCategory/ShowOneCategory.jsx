import React from 'react'
import CardProduct from '../../Components/CardProduct/CardProduct'
function ShowOneCategory({ item }) {
    return (
        <div>
            <CardProduct item={item} />
        </div>
    )
}

export default ShowOneCategory
