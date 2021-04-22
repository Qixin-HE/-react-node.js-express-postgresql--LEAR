import React from 'react';
import backgroundImg from '../images/bg.jpg';
import { Card, Button, CardDeck, Carousel, Container, } from 'react-bootstrap';
import carouselsImg from '../images/zjt-lear.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <>

        <div id="bodyblock" >

            <div id="longcard">
                <Carousel interval={null}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselsImg}
                            alt="First slide"

                        />
                        <Carousel.Caption style={{top: "20%"}}>
                            <h2>LEAR stands for Litter Education and Action Resource</h2>
                            <Container style={{ left: "15%", lineHeight: "1"}}>
                            <h5 id="carouselp" style={{ textAlign: "left"}}>This project aims to address the littering issue in four aspects: </h5>
                            
                            <p style={{ textAlign: "left"}}>
                            1. raising public awareness</p>
                            <p style={{ textAlign: "left"}}>
                            2. providing education regarding littering
                            </p>
                            
                            <p style={{ textAlign: "left"}}>
                            3. deterring the general public from littering and building a platform for environmental volunteers </p>
                            <p style={{ textAlign: "left"}}>
                            4. new volunteers alike to get involved in the effort to clean up our beaches and remove litter from our environment
                            </p>
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselsImg}
                            alt="Second slide"
                        />

                        <Carousel.Caption style={{top: "20%"}}>
                            <h2>Iteration 2</h2>
                            <h4 id="carouselp" style={{ textAlign: "center"}}>In this iteration, we focus on displaying locations on map on Events page. check it out!</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselsImg}
                            alt="Third slide"
                        />

                        <Carousel.Caption style={{top: "20%"}}>
                            <h2>Upcoming: Iteration 3</h2>
                            <h4 id="carouselp" style={{ textAlign: "center"}}>We will improve our website in terms of the fuctionalities in the past iterations.</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id="longcard">
                <CardDeck>
                    <Card style={{ width: '18rem' }} >

                        <Card.Body>
                            <Card.Title>What is LEAR?</Card.Title>
                            <Card.Text>
                            LEAR stands for Litter Education & Action Resource and is a tool to help environmental volunteers identify, locate, and dispose of litter. LEAR aims to make the lives of environmental volunteers easier by empowering them. Click the more tab for additional information</Card.Text>
                            <Link to="/contactus">
                                <Button variant="primary">More</Button>
                            </Link>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            <Card.Title>Litter Classifier</Card.Title>
                            <Card.Text>
                            Sometimes it can be difficult to figure out which type of litter you have found. Our Litter classifier will assist in identifying what type of litter you have and the correct disposal method for it. Click the more tab for additional information</Card.Text>
                            <Link to="/litterclassification">
                                <Button variant="primary">More</Button>
                            </Link>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            <Card.Title>Legislation and Litter</Card.Title>
                            <Card.Text>
                            Keep up to date with the most recent laws regarding litter and penalties or get your inner law geek on and read through previous legislation relating to litter. Click the more tab for additional information</Card.Text>
                            <Link to="/article-list">
                                <Button variant="primary">More</Button>
                            </Link>

                        </Card.Body>
                    </Card>

                    <Card  >
                        <Card.Body>
                            <Card.Title>Clean Up Events</Card.Title>
                            <Card.Text>
                            Whether it is hosting a clean-up event or attending a clean up event, our interactive map will provide you with all the information you could need. You can create Eventbrite events for local clean ups. Click the more tab for additional information</Card.Text>
                            <Link to="/events">
                                <Button variant="primary">More</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
            <div id="longcard">
                <CardDeck>

                    <Card  >

                        <Card.Body>
                            <Card.Title>Information from News and Twitter</Card.Title>
                            <Card.Text>
                                Will implement in the upcomming iterations!
                                <br />
                                <br />
                                <br />
                                <br />

                            </Card.Text>

                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        </div>
    </>


);


export default HomePage;
