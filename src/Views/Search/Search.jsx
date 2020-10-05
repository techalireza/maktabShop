import React , {useState , useEffect} from 'react'
import {connect , useSelector} from 'react-redux'
import {fetchApi} from '../../Redux/productRedux/product.thunk'

import { Form, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './Search.scss'
function Search({fetchApi}) {
    const [search, setSearch] = useState('')
    const products = useSelector(state => state.product.products)
    const pending = useSelector(state => state.product.pending)
    const [attribut, setAttribut] = useState({})

    useEffect(() => {
        fetchApi('products', attribut, 'search')
        console.log(products)
    }, [])

    const handleChange = (event) => {
        const { value } = event.target;
        setSearch(value);
    }
    let filteredProduct = products.search.filter(item => item.name.startsWith(search))
    return (
        <Form inline className="mr-auto my-search">
            {
                console.log("search : " , filteredProduct)
            }
            <FormControl type="Search" name={"search"} id="search" value={search} onChange={handleChange} className="w-auto" />
            <Form.Label htmlFor="idSearch" className="m-2"><FontAwesomeIcon icon={faSearch} /></Form.Label>
        </Form>
    )
}

export default connect(null, { fetchApi })(Search)
