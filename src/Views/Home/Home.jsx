import React, { useEffect } from 'react'
import axios from 'axios'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


function Home() {
    const api = new WooCommerceRestApi({
        url: "https://woocommerce.maktabsharif.ir",
        consumerKey: "ck_9d1adc29a1e3fce74dff2bfb61cdb52d112d6e1a",
        consumerSecret: "cs_90e4daa51516c209d807929e8a933c992e9b9db9",
        version: "wc/v3"
    });
    useEffect(() => {

        api.delete("products/781" , {
            force : true
        })
            .then((response) => {
                // Successful request
                console.log("Response Status:", response.status);
                console.log("Response Headers:", response.headers);
                console.log("Response Data:", response.data);
            })
            .catch((error) => {
                // Invalid request, for 4xx and 5xx statuses
                console.log("Response Status:", error.response.status);
                console.log("Response Headers:", error.response.headers);
                console.log("Response Data:", error.response.data);
            })
            .finally(() => {
                // Always executed.
            });
        api.get('products', {
            per_page: 20,
        })
            .then((response) => {
                console.log("Response Status:", response.status);
                console.log("Response Headers:", response.headers);
                console.log("Response Data:", response.data);
                console.log("Total of pages:", response.headers['x-wp-totalpages']);
                console.log("Total of items:", response.headers['x-wp-total']);
            })
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
