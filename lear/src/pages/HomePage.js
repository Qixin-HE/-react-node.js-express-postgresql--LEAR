import React from 'react';
import backgroundImg from '../images/bg.jpg';
import { Card, Button, CardDeck, Carousel, } from 'react-bootstrap';
import carouselsImg from '../images/zjt-lear.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <>

        <div id="bodyblock" >

            <div id="longcard">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselsImg}
                            alt="First slide"

                        />
                        <Carousel.Caption>
                            <h3>Welcome to LEAR!</h3>

                            <p id="carouselp">LEAR stands for Litter Education and Action Resource.This project aims to address the littering issue in four aspects: raising public awareness; providing education regarding littering; deterring the general public from littering and building a platform for environmental volunteers and new volunteers alike to get involved in the effort to clean up our beaches and remove litter from our environment.</p>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselsImg}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Iteration 1</h3>
                            <p>In this iteration, we focus on the litter classification information, and laws and penalties information.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselsImg}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Upcoming: Iteration 2</h3>
                            <p>We will implement map functionality to inform volunteer where are the events!</p>
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
                                
                                LEAR stands for Litter Education & Action Resource and is a tool to help environmental volunteers identify, locate, and dispose of litter. With helpful links to legislation and a litter classifier, LEAR aims to make the lives of environmental volunteers easier by empowering them with easy access to all information they require. Click the more tab for additional information</Card.Text>
                            <Link to="/contactus">
                                <Button variant="primary">More</Button>
                            </Link>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            <Card.Title>Litter Classifier</Card.Title>
                            <Card.Text>
                            Sometimes it can be difficult to figure out which type of litter you have found. Our Litter classifier will assist in identifying what type of litter you have, how long it takes to decompose and the correct disposal method for it. Click the more tab for additional information</Card.Text>
                            <br />
                            <br />
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
                            <br />
                            <br />
                            <br />
                            <br />
                            <Link to="/article-list">
                                <Button variant="primary">More</Button>
                            </Link>

                        </Card.Body>
                    </Card>

                    <Card  >
                        <Card.Body>
                            <Card.Title>Clean Up Events</Card.Title>
                            <Card.Text>
                            Whether it is hosting a clean-up event or attending a clean up event, our interactive map will provide you with all the information you could need. Clean up event locations and times, Litter disposal sites and public transport information, the map has it all. You can also click the link to create Eventbrite events for local clean ups. Click the more tab for additional information</Card.Text>
                            <Link to="/contactus">
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