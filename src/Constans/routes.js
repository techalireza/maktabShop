import React from 'react'

const Home = React.lazy(() => import('../Views/Home/Home'))
const Product = React.lazy(() => import('../Views/Product/Product'))
const SingleCategory = React.lazy(() => import('../Views/SingleCategory/SingleCategory'))

const routes = [
    {path:'/' , exact:true , component:Home},
    {path:'/product/:id' , exact:true , component:Product},
    {path:'/category/:id' , exact:true , component:SingleCategory},
]

export default routes