import React from 'react';
import backgroundImg from '../images/bg.jpg';
import { Card, Button, CardDeck } from 'react-bootstrap';

const HomePage = () => (
    <>

        <div id="bodyblock" >
            <h1>Hello, welcome to LEAR!</h1>
            <h3>Project Description</h3>
            <p>
                Our project LEAR stands for Litter Education and Action Resource. This project aims to address the littering issue in four aspects: raising public awareness; providing education regarding littering; deterring the general public from littering and building a platform for environmental volunteers and new volunteers alike to get involved in the effort to clean up our beaches and remove litter from our environment. There are three major groups of people that our project is targeted towards. These are environmental volunteers, litterers and younger children.
    </p>
            <CardDeck>
                <Card style={{ width: '18rem' }} >

                    <Card.Body>
                        <Card.Title>About the Product</Card.Title>
                        <Card.Text>
                            <br/>
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

            </CardDeck>
            <div id="longcard">
            <CardDeck>
            <Card  >
                <Card.Body>
                    <Card.Title>Volunteer Events</Card.Title>
                    <Card.Text>
                        In this project we are focusing on using various open data sets. At the current stage, we will be working with 8 datasets, but we will be adding a few more datasets as the project progresses.
</Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
            </Card>
            <Card  >
                
                <Card.Body>
                    <Card.Title>Information from News and Twitter</Card.Title>
                    <Card.Text>
                        In this project we are focusing on using various open data sets. At the current stage, we will be working with 8 datasets, but we will be adding a few more datasets as the project progresses.
</Card.Text>
                    
                </Card.Body>
            </Card>
           </CardDeck>
           </div>
        </div>
    </>


);


export default HomePage;