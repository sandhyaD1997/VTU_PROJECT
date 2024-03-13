import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import{Link} from 'react-router-dom';

const HomeScreen = () => {
    return (
        <>
            <div>
                <marquee>VTU Result 2024 out - Check Exam Results here !!!
                    <Link to='/result/loginPage'>Clickhere...</Link>Best Of Luck!!!
                    
                </marquee>
            </div>
            
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img height="550"
                            className="d-block w-100"
                            src="images/img1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height="550"
                            className="d-block w-100"
                            src="images/img3.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height="550"
                            className="d-block w-100"
                            src="images/img4.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height="550"
                            className="d-block w-100"
                            src="images/img5.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height="550"
                            className="d-block w-100"
                            src="images/img2.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <br />
                <div>
                    <Row>
                        <Col>
                            <h3><Link to="/about">Vision</Link>
                                <p className='p-style'>To plan the development of technical education to
                                    establish value-based and need-based education and
                                    training in engineering and technology, with a view to
                                    generate qualified and competent manpower,
                                    responsive to technological and societal needs.
                                </p>
                               
                                <Link to='/about' className='btn btn-warning'>Read More</Link></h3>
                        </Col>
                        <Col>
                            <h3><Link to='/about'>Mission</Link>
                                <p className='p-style'>To plan the development of technical education to
                                    establish value-based and need-based education and
                                    training in engineering and technology, with a view to
                                    generate qualified and competent manpower,
                                    responsive to technological and societal needs.
                                </p>
                            

                                <Link to ='/about' className='btn btn-warning'>Read More</Link>
                            </h3>
                        </Col>

                        <Col>
                            <h3><Link to ='/about'>Mandate</Link>
                                <p className='p-style'>To plan the development of technical education to
                                    establish value-based and need-based education and
                                    training in engineering and technology, with a view to
                                    generate qualified and competent manpower,
                                    responsive to technological and societal needs.
                                </p>
                                <Link to='/about' className='btn btn-warning'>Read More</Link>
                            </h3>
                        </Col>

                    </Row>
                </div>

            </div>
        </>
    )
}
export default HomeScreen