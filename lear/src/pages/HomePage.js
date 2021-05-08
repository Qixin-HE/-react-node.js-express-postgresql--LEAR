import React from 'react';
import carouselsImg from '../images/zjt-lear.jpg';
import pic02 from '../images/homepagepic2.jpg';
import pic03 from '../images/homepagepic3.jpg';
import pic04 from '../images/homepagepic4.jpg';
import { Card, Button, CardDeck, Carousel, Container, Row, Col, } from 'react-bootstrap';

import { Link, } from 'react-router-dom';

const HomePage = () => (
    <>
     
    <Container id="container1" fluid style={{ paddingLeft:"0px", marginTop: "-15px" }}>
  <Row>
    <Col>
    
    <img className="d-block w-100"
         src={carouselsImg}
         alt="What is LEAR"
         style={{position:"absolute"}}/>


                    <Card style={{     width: "60rem",
    height: "18rem",
    
    marginTop: "50px",borderRadius: "0rem", position: "absolute",
    left: "0%"}} >

                        <Card.Body style={{paddingBlock: "60px"}}>
                            <Card.Title>
                                <h1 class="text-dark font-weight-light">Litter Classification</h1></Card.Title>
                            <Card.Text>
                                <h3 class="text-dark font-weight-light" style={{ textAlign: "center"}}>
                                Need help classifying litter? Our Litter Classification Tool can help! </h3>
                            </Card.Text>
                            <Link style={{display: "flex", alignItems: "center",justifyContent: "center"}} to="/litterclassification">
                                <Button variant="info" size="lg" style={{paddingLeft: "60px",
    paddingRight: "60px"}}>Try the Classifier</Button>
                            </Link>

                        </Card.Body>
                    </Card>
    </Col>
  </Row>
 
</Container>

<Container id="container2" fluid style={{paddingLeft:"0px", marginTop: "400px"}}>
<Row>
    <Col>
    
    <img className="d-block w-100"
         src={pic02}
         alt="First slide"
         style={{position:"absolute"}}/>


                    <Card style={{ width: "60rem", height: "18rem", marginTop: "50px",borderRadius: "0rem", 
                    position: "absolute", right: "0%"}} >

                        <Card.Body style={{paddingBlock: "60px"}}>
                            <Card.Title>
                                <h1 class="text-dark font-weight-light">Clean Up Events</h1></Card.Title>
                            <Card.Text>
                                <h3 class="text-dark font-weight-light" style={{ textAlign: "center"}}>
                                Our interactive map will provide you with all the information you could need.</h3>
                            </Card.Text>
                            <Link style={{display: "flex", alignItems: "center",justifyContent: "center"}} to="/events">
                                <Button variant="info" size="lg" style={{paddingLeft: "60px",
    paddingRight: "60px"}}>Check the Map</Button>
                            </Link>

                        </Card.Body>
                    </Card>

                        </Col>
  </Row>
</Container>
<Container id="container3" fluid style={{ paddingLeft:"0px", marginTop: "400px" }}>
  <Row>
    <Col>
    
    <img className="d-block w-100"
         src={pic03}
         alt="Legistation"
         style={{position:"absolute"}}
/>

<Card style={{ width: "60rem",
    height: "18rem",
    marginTop: "50px",borderRadius: "0rem"}} >

                        <Card.Body style={{paddingBlock: "60px"}}>
                            <Card.Title>
                                <h1 class="text-dark font-weight-light">Legislation and News</h1></Card.Title>
                            <Card.Text>
                                <h3 class="text-dark font-weight-light" style={{ textAlign: "center"}}>
                                Find out the current legislation and penalties as well as news from around the workld about litter.</h3>
                            </Card.Text>
                            <Link style={{display: "flex", alignItems: "center",justifyContent: "center"}} to="/article-list">
                                <Button variant="info" size="lg" style={{paddingLeft: "60px",paddingRight: "60px"}}>Find out More</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                   
                        </Col>
  </Row>
 
</Container>

<Container id="container4" fluid style={{paddingLeft:"0px",marginTop: "62px" }}>
<Row>
    <Col>
    <img className="d-block w-100"
         src={pic04}
         alt="clean up events pic"
         style={{position:"absolute"}}
/>

                    <Card style={{  width: "60rem", height: "18rem", marginTop: "50px",borderRadius: "0rem", 
                    position: "absolute", right: "0%"}} >
                        <Card.Body style={{paddingBlock: "60px"}}>
                            <Card.Title>
                                <h1 class="text-dark font-weight-light">What is LEAR?</h1></Card.Title>
                            <Card.Text>
                                <h3 class="text-dark font-weight-light" style={{ textAlign: "center"}}>Learn more about what LEAR is, why it exists and the team behind it!</h3>
                            </Card.Text>
                            <Link style={{display: "flex", alignItems: "center",justifyContent: "center"}} to="/contactus">
                                <Button variant="info" size="lg" style={{paddingLeft: "60px",
    paddingRight: "60px"}}>Find Out More About Us</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                        </Col>
  </Row>
</Container>
<Container id="container5" fluid style={{paddingLeft:"0px",marginTop: "400px", paddingRight: "0" }}>
    <div style={{}}>
<Card  id="bottom-card" style={{display: "flex",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "300px" }}>
                        <Card.Body style={{position: "absolute", marginTop: "50px"}}>
                        <Card.Title>
                                <h1 class="text-dark font-weight-light">
                                Information from News and Twitter
                                </h1></Card.Title>
                            <Card.Text>
                                <h3 class="text-dark font-weight-light" style={{ textAlign: "center"}}>
                                Will implement in the upcomming iterations!
                                
                                <br />
                                <br />
                                <br />
                                <br />
                                </h3>
                            </Card.Text>                       

                        </Card.Body>
                    </Card>
                    </div>
</Container>

 
    </>


);


export default HomePage;
