import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './Search.scss'
function Search() {
    return (

        <Form inline className="mr-auto my-search">
            <FormControl type="Search" name="search" id="idSearch" className="w-auto" />
            <Form.Label for="idSearch" className="m-2"><FontAwesomeIcon icon={faSearch} /></Form.Label>
        </Form>

    )
}

export default Search
