import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap';
import logo from '../images/5120mp14logo.png';
import image2 from '../images/AboutUsIm2.PNG';

const ContactUsPage = () => {
    
    return (
    <>
        <h1>About Us</h1>

        <Container>

            <Row>

                <Col sm={7}>
                    <div id="text-block" style={{height: "420px"}}>
                        <Row>
                            <p style={{lineHeight: "1.7"}}>L.E.A.R is the Litter Education and Action Resource. Established by a group of university students, LEAR aims to assist environmental volunteers in their efforts to clean up our world, bit by bit. Using our interactive mapping feature, users will have the ability to search for litter disposal sites, find litter traps, locate beach clean-up events, and identify how to get to and from each event. The litter classification section will help users with identifying different types of litter and how to dispose of them correctly. For users who want to understand litter legislation, the legal information section will provide users with the latest legislation regarding littering as well as data collected on fines. With all the above resources, the team hopes that environmental volunteers can be empowered to continue in their attempts to clean the world up bit by bit.</p>
                        </Row>
                    </div>
                </Col>

                <Col sm={5}>
                    <Row>
                        <div id="aboutusimg">
                        <img
                            alt=""
                            src={logo}
                            style={{
                                marginTop: "20px",
                            width: "400px",
                            marginLeft: "20px"
                            }}
                           
                            className="d-inline-block align-top"
                        />{' '}
                        </div>
                    </Row>
                    <Row>
                    <img
                            alt=""
                            src="https://static.ffx.io/images/$zoom_1%2C$multiply_0.1875%2C$ratio_1.777778%2C$width_2000%2C$x_0%2C$y_4/t_crop_custom/q_86%2Cf_auto/fce76a2de58c816e77faf3330aa9f8985998932f"
                            style={{
                                margin: "20px",
                            width: "400px",
                            
                            }}
                            
                            className="d-inline-block align-top"
                        />{' '}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col sm={7}>
                <div id="text-block" style={{height: "420px"}}>
                    <p style={{marginLeft: "-15px",
    marginRight: "-15px",lineHeight: "1.7"}}>The team is a hard-working group of 5 data driven students. Our Chief Developer Zoe (Qixin) He (top, middle) has been working tirelessly to implement the ideas that the team has come up with. Daniel Fornarino (bottom right) and Kartik Gera (bottom left) have provided the open data for this project, scouring the internet to find useful and insightful information for users. Yuhang Zhou (top left) and Weichen Wang (top right) have been working away in the background to ensure that the user experience is as seamless as possible, and that users want to use our product. Together, through hard work and weeks of development the team has presented LEAR.</p>
                </div>
                </Col>
                <Col sm={5}>
                    <img
                        alt=""
                        src={image2}
                        style={{margin: "5px",
                            marginTop: "20px",
                            width: "600px",
                            height: "420px"}}
                        className="d-inline-block align-top"
                    />{' '}
                </Col>
            </Row>
            
            <div style={{backgroundColor: "rgba(245, 245, 245, 0.60)", width: "1270px",
    marginTop: "25px",
    padding: "20px"}} >
                <div>
                    <h5 style={{    textAlign: "left"}}>
                    Contact Us
                    </h5>
                <p>
                    
                    Email – ask.monash@f.e.monash.edu{"\n"}
                    </p>
                </div>
<div>
                    <p>
                    Phone number (9:00am – 5:00pm Mondays to Fridays) – (03) 9902 6011
                    
                    </p>
                    </div>
                    <div>
                    <p>Mahara Page -  <span> </span>
            <Link to={{ pathname: "http://bit.ly/MP14-LEAR" }} target="_blank" >
                Click here
            </Link>
            </p>
                    </div>
                    
            </div>
                   

        </Container>

    </>

);
    }

export default ContactUsPage;