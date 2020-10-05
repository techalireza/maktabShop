import React from 'react'

const Home = React.lazy(() => import('../Views/Home/Home'))
const Product = React.lazy(() => import('../Views/Product/Product'))
const SingleCategory = React.lazy(() => import('../Views/SingleCategory/SingleCategory'))
const SingleProducts = React.lazy(() => import('../Views/SingleProducts/SingleProducts'))
const Basket = React.lazy(() => import('../Views/Basket/Basket'))

const routes = [
    
    {path:'/product/:id' , exact:true , component:Product},
    {path:'/basket' , exact:true , component:Basket},
    {path:'/category/:id' , exact:true , component:SingleCategory},
    {path:'/products/:id' , exact:true , component:SingleProducts},
    {path:'/' , exact:true , component:Home},
]

export default routes