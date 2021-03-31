import React from 'react';
import backgroundImg from '../images/bg.jpg';
import { Card, Button, CardDeck, Carousel, } from 'react-bootstrap';
import carouselsImg from '../images/zjt-lear.jpg';

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
                            <Card.Title>About the Product</Card.Title>
                            <Card.Text>
                                <br />
                            In this project we are focusing on using various open data sets. At the current stage, we will be working with 8 datasets, but we will be adding a few more datasets as the project progresses.
    </Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            <Card.Title>The important Mel Offical Laws</Card.Title>
                            <Card.Text>
                                In this project we are focusing on using various open data sets. At the current stage, we will be working with 8 datasets, but we will be adding a few more datasets as the project progresses.
    </Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            <Card.Title>Litter Classification Information</Card.Title>
                            <Card.Text>
                                In this project we are focusing on using various open data sets. At the current stage, we will be working with 8 datasets, but we will be adding a few more datasets as the project progresses.
    </Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </Card>
                    <Card  >
                        <Card.Body>
                            <Card.Title>Volunteer Events</Card.Title>
                            <Card.Text>
                                In this project we are focusing on using various open data sets. At the current stage, we will be working with 8 datasets, but we will be adding a few more datasets as the project progresses.
</Card.Text>
                            <Button variant="primary">More</Button>
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
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                
</Card.Text>

                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        </div>
    </>


);


export default HomePage;