import React, { useEffect , useState} from 'react'
import { Container } from 'react-bootstrap'
import Categories from '../../Components/Categories/Categories'
import Slider from '../../Components/Slider/Slider'
import Specials from '../../Components/Spacials/Specials'
import ShowProduct from '../../Components/ShowProduct/ShowProduct'
import './Home.scss'
import BestSaleProduct from '../../Components/BestSaleProduct/BestSaleProduct'

function Home() {
    const [allCategory, setAllCategory] = useState({})
    const [vegetableCategory, setVegetableCategory] = useState({category : 81})
    
    return (
        <Container fluid className="px-0">
            <Slider />
            <Categories />
            <Specials cat={allCategory} />
            <BestSaleProduct cat={vegetableCategory} />
            <Specials cat={vegetableCategory} />
        </Container>
    )
}

export default Home
