import React, { useEffect } from 'react'
import axios from 'axios'

function Home() {
    useEffect(() => {
        axios.get('https://woocommerce.maktabsharif.ir/wp-json/wc/v3/products?consumer_key=ck_9d1adc29a1e3fce74dff2bfb61cdb52d112d6e1a&consumer_secret=cs_90e4daa51516c209d807929e8a933c992e9b9db9')
            .then(res => console.log(res.data))
            .catch((error) => {
                console.log(error.response.data);
            })
    })
    return (
        <div>
            this is home
        </div>
    )
}

export default Home
