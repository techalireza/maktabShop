import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Categories from '../../Components/Categories/Categories'
import Slider from '../../Components/Slider/Slider'
import Specials from '../../Components/Spacials/Specials'
import './Home.scss'
import BestSaleProduct from '../../Components/BestSaleProduct/BestSaleProduct'

import all from '../../Asset/img/specials.png'
import superMarket from '../../Asset/img/supermarket.png'
import Test from '../../Components/Test'

function Home() {
    const [allCategory, setAllCategory] = useState({ name : 'all',})
    const [supermarket, setSupermarket] = useState({ name : 'supers', category: 81, orderby: "date" })
    const [digitals, setDigitals] = useState({ name : 'digis', category: 52, orderby: "date" })
    const [news, setNews] = useState({ name : 'news', orderby: "date" })
    const [dresses, setDresses] = useState({ name : 'dresses', category: 62, orderby: "date" })
    const [books, setBooks] = useState({ name : 'books', category: 76, orderby: "date" })
    const [onSales, setOnSales] = useState({ name : 'sales', on_sale:true, orderby: "date" })

    return (
        <Container fluid className="px-0">
            <Slider />
            <Categories />
            <Specials cat={allCategory} categoryID={onSales.name} img={all} />
            <BestSaleProduct cat={allCategory} categoryID={allCategory.name} name="پر فروش ترین کالاها" />
            <Specials cat={supermarket} categoryID={supermarket.name} img={superMarket} />
            <BestSaleProduct cat={digitals} categoryID={digitals.name} name="منتخب کالاهای دیجیتال" />
            <BestSaleProduct cat={news} categoryID={news.name} name="جدیدترین کالاها" />
            <BestSaleProduct cat={dresses} categoryID={dresses.name} name="پوشاک" />
            <BestSaleProduct cat={books} categoryID={books.name} name="کتاب و هنر" />
            <BestSaleProduct cat={onSales} categoryID={onSales.name} name="کالاهای فروش ویژه" />
        </Container>
    )
}

export default Home
