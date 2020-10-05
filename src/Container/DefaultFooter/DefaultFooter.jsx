import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import './DefaultFooter.scss'

function index({  }) {
    return (
        <div className="footer-section pt-5">
            <Container>
                <Row className="line">
                    <Col xs={4}>
                        <h4>دسته بندی ها</h4>
                        <ul>
                            {/* {
                                category.map(item =>
                                    <Link to="./">
                                        <li>{item.name}</li>
                                    </Link>
                                )
                            } */}
                            <a href="#">
                                <li>رویداد های تکنولوژی</li>
                            </a>
                            <a href="#">
                                <li>رویداد های کارآفرینی</li>
                            </a>
                            <a href="#">
                                <li>رویداد های هنری</li>
                            </a>
                            <a href="#">
                                <li>رویداد های کسب و کار</li>
                            </a>
                            <a href="#">
                                <li>رویداد های مدیریت</li>
                            </a>
                            <a href="#">
                                <li>رویداد های مهندسی</li>
                            </a>
                        </ul>
                    </Col>
                    <Col xs={4}>
                        <h4>شهر های پر رویداد</h4>
                        <ul>
                            <a href="#">
                                <li>تهران</li>
                                <li>شیراز</li>
                            </a>
                        </ul>
                    </Col>
                    <Col xs={4}>
                        <h4>دانشگاه ها</h4>
                        <ul>
                            <a href="#">
                                <li>دانشگاه صنعتی خواجه نصیر</li>
                                <li>دانشگاه صنعتی شیراز</li>
                            </a>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
export default index
// const mapStateToProps = state => {
//     return {
//         category: state.initialState.category,
//     }
// }
// export default connect(mapStateToProps, {})(index)