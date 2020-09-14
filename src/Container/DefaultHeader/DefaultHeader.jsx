import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Button, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap'

import Search from '../../Views/Search/Search';
import './DefaultHeader.scss'

function DefaultHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggleDropDown = () => setIsOpenDropDown(!isOpenDropDown);

    return (
        <Container>
            <Navbar bg="light" expand="lg" className="d-flex flex-row-reverse">
                <Navbar.Brand href="/">Alireza8</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="text-right">
                    <Button className="my-buttons mt-3 mt-lg-0" href="/sign-up">ورود به حساب کاربری</Button>
                    <Nav className="mr-0">
                        <Nav.Link href="/">خانه</Nav.Link>
                        <Nav.Link href="/">تخفیف و پیشنهادهای ویژه</Nav.Link>
                        <NavDropdown title="دسته بندی محصولات" id="basic-nav-dropdown" onMouseOver={() => setIsOpenDropDown(true)}
                            onMouseLeave={() => setIsOpenDropDown(false)} isOpen={isOpenDropDown}>
                            <NavDropdown.Item href="/" className="pr-3">دیجیتال</NavDropdown.Item>
                            <NavDropdown.Item href="/" className="pr-3">سوپر مارکت</NavDropdown.Item>
                            <NavDropdown.Item href="/" className="pr-3">بهداشت</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Search className="mr-auto" />
                </Navbar.Collapse>
            </Navbar>
        </Container >
    );
}

export default DefaultHeader
