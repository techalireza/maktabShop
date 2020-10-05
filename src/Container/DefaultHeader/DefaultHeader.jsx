import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Button, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import Search from '../../Views/Search/Search';
import './DefaultHeader.scss'
import logo from '../../Asset/img/logo.png'

function DefaultHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const [scrolled, setScrolled] = useState(false)


    useEffect(() => {
        if (window.screen.width > 992) {
            let prevScrollpos = window.pageYOffset;
            if (prevScrollpos === 0) {
                document.getElementById("navbar").style.position = "relative";
                document.getElementById("navbar").style.boxShadow = "none";
            }
            window.addEventListener('scroll', () => {
                let currentScrollPos = window.pageYOffset;
                if (currentScrollPos < 100) {
                    document.getElementById("navbar").style.position = "relative";
                    document.getElementById("navbar").style.boxShadow = "none";
                }
                else if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navbar").style.position = "fixed";
                    document.getElementById("navbar").style.top = "0";
                    document.getElementById("navbar").style.boxShadow = "1px 1px 10px rgba(20,20,20,.3)";
                } else {
                    document.getElementById("navbar").style.position = "relative";
                    document.getElementById("navbar").style.top = "-70px";
                    document.getElementById("navbar").style.boxShadow = "1px 1px 10px rgba(20,20,20,.3)";

                }
                prevScrollpos = currentScrollPos;
            });
        }
    }, []);

    return (
        <div className="header" id="navbar">
            <div className="my-container">
                <Navbar expand="lg" className="d-flex flex-row-reverse">
                    <Link to="/basket">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                    <Navbar.Brand href="/" className="mr-0 mr-lg-4 mt-1">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
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
                                <NavDropdown.Item href="/" className="pr-3">کتاب و هنر</NavDropdown.Item>
                                <NavDropdown.Item href="/" className="pr-3">پوشاک</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Search className="mr-auto" />
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default DefaultHeader
