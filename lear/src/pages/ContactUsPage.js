import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap';
import navigateToElement from '../components/ArticleNaviation';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import logo from '../images/5120mp14logo.jpg';
import zoePic from '../images/Zoe.jpg';
import YuhangPic from '../images/Yuhang.jpg';
import WeichenPic from '../images/Weichen.jpg';
import danielPic from '../images/Daniel.jpg';
import kartikPic from '../images/Kartik.jpg';



const ContactUsPage = () => {

    return (
        <>

            {/* <h1 class="text-dark font-weight-light" style={{paddingTop: "40px"}}>About Us</h1> */}

            <Container>
                <Row>
                    <Col sm={4} style={{ left: "10%", position: "fixed", marginLeft: "-10px" }}>
                        <div >

                            <List disablePadding dense style={{
                                backgroundColor: "rgba(245, 245, 245, 0.8)",
                                position: "fixed",
                                width: "20%",
                                borderRadius: "0.7rem",
                                paddingTop: "10px",
                                marginTop: "48px"
                            }}>

                                <ListItem button onClick={() => navigateToElement("what")}>
                                    <h5 class="text-dark font-weight-light" >
                                        What is LEAR?</h5>
                                </ListItem>
                                <ListItem button onClick={() => navigateToElement("who")}>
                                    <h5 class="text-dark font-weight-light" >
                                        Who created this?</h5>
                                </ListItem>
                                <ListItem button onClick={() => navigateToElement("problem")}>
                                    <h5 class="text-dark font-weight-light" >
                                        What is LEAR trying to solves?</h5>
                                </ListItem>
                                <ListItem button onClick={() => navigateToElement("features")}>
                                    <h5 class="text-dark font-weight-light" >
                                        What are the features of this website?</h5>
                                </ListItem>
                                {/* <ListItem button onClick={() => navigateToElement("penaltiesLaw")}>
                    <h5 class="text-dark font-weight-light" >
                    Penalty Units</h5>                    
                </ListItem>
                <ListItem button onClick={() => navigateToElement("link")}>
                    <h5 class="text-dark font-weight-light" >
                    Link to legislation</h5>                    
                </ListItem>
                <ListItem button onClick={() => navigateToElement("data")}>
                    <h5 class="text-dark font-weight-light" >
                        Fine data 2020</h5>
                    
                </ListItem> */}
                            </List>
                        </div>
                    </Col>
                    <Col sm={8} style={{ left: "30%" }}>
                        <Row>
                            <h1 class="text-dark font-weight-light" style={{ paddingTop: "40px", marginBlockEnd: "30px" }}>
                                About Us
                                </h1>
                        </Row>
                        <br />
                        <Row>
                            <div id="article_block" style={{ paddingBottom: "40px" }}>
                                <div id="what">
                                    <h5 style={{ textAlign: "left" }}>
                                        What is LEAR?
                                </h5>
                                    <p>
                                        L.E.A.R stands for the Litter Education and Action Resource.
                                    </p>
                                    <img
                                        alt="logo picture"
                                        src={logo}
                                        style={{
                                            marginTop: "20px",
                                            width: "80%",
                                            marginLeft: "20px"
                                        }}

                                        className="d-inline-block align-top"
                                    />{' '}
                                </div>
                            </div>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <Row>
                            <div id="article_block">
                                <div id="who">
                                    <h5 style={{ textAlign: "left" }}>
                                        Who created this?
                                </h5>
                                    <p>
                                        Established by a group of university students.
                                    </p>
                                    <Row>
                                        <Col sm={4}>
                                            <img
                                                alt="The Developer Picture."
                                                className="img-fluid rounded shadow"
                                                src={zoePic}
                                                style={{width: "150px"}}
                                            />
                                            <p style={{ textAlign: "center", marginTop: "0.5rem", marginBottom: "0rem"}}><strong>Zoe / Qixin He</strong></p>
                                            <p style={{ textAlign: "center"}}>MIT</p>
                                        </Col>
                                        <Col sm={8}>
                                            <p style={{marginTop: "20px"}}>The Developer of the team. She has been working tirelessly to implement the ideas that the team has come up with. </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={2}>
                                            <img
                                                alt="The Data Specialist Picture."
                                                className="img-fluid rounded shadow"
                                                src={danielPic}
                                                style={{width: "100px",height: "75px"}}
                                            />
                                            <p style={{ textAlign: "center", marginTop: "0.5rem", marginBottom: "0rem"}}><strong>Daniel Fornarino</strong></p>
                                            <p style={{ textAlign: "center"}}>MDS</p>
                                        </Col>
                                        <Col sm={2}>
                                            <img
                                                alt="The Data Specialist Picture."
                                                className="img-fluid rounded shadow"
                                                src={kartikPic}
                                                style={{width: "100px",  height: "75px"
                                            }}
                                            />
                                            <p style={{ textAlign: "center", marginTop: "0.5rem", marginBottom: "0rem"}}><strong>Kartik</strong></p>
                                            <p style={{ textAlign: "center", marginBottom: "0rem"}}><strong>Gera</strong></p>
                                            <p style={{ textAlign: "center"}}>MDS</p>
                                        </Col>
                                        <Col sm={8}>
                                            <p style={{marginTop: "20px"}}>
                                            The data specialist of the team. They have provided the open data for this project, scouring the internet to find useful and insightful information for users. 
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={2}>
                                            <img
                                                alt="The Business Analyst Picture."
                                                className="img-fluid rounded shadow"
                                                src={YuhangPic}
                                                style={{width: "75px", height: "100px"}}
                                            />
                                            <p style={{ textAlign: "center", marginTop: "0.5rem", marginBottom: "0rem"}}><strong>Yuhang Zhou</strong></p>
                                            <p style={{ textAlign: "center"}}>MBIS</p>
                                        </Col>
                                        <Col sm={2}>
                                            <img
                                                alt="The Business Analyst Picture."
                                                className="img-fluid rounded shadow"
                                                src={WeichenPic}
                                                style={{width: "75px", height: "100px"}}
                                            />
                                            <p style={{ textAlign: "center", marginTop: "0.5rem", marginBottom: "0rem"}}><strong>Weichen Wang</strong></p>
                                            
                                            <p style={{ textAlign: "center"}}>MBIS</p>
                                        </Col>
                                        <Col sm={8}>
                                            <p style={{marginTop: "20px"}}>
                                            The business analyst of the team. They have been working away in the background to ensure that the user experience is as seamless as possible, and that users want to use our product. 
                                             </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <p>
                                        Together, through hard work and weeks of development the team has presented LEAR.
                                        </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <Row>
                            <div id="article_block">
                                <div id="problem">
                                    <h5 style={{ textAlign: "left" }}>
                                        What is LEAR trying to solves?
                                </h5>
                                    <p>
                                        LEAR aims to assist environmental volunteers in their efforts to clean up our world, bit by bit.
                                     </p>
                                </div>
                            </div>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <Row>
                            <div id="article_block">
                                <div id="features">
                                    <h5 style={{ textAlign: "left" }}>
                                        What are the features of this website?
                                </h5>
                                    <div style={{ paddingLeft: "25px" }}>
                                        <img
                                            alt="Volunteers involved in an event."
                                            src="https://static.ffx.io/images/$zoom_1%2C$multiply_0.1875%2C$ratio_1.777778%2C$width_2000%2C$x_0%2C$y_4/t_crop_custom/q_86%2Cf_auto/fce76a2de58c816e77faf3330aa9f8985998932f"
                                            style={{
                                                margin: "20px",
                                                width: "400px",

                                            }}

                                            className="d-inline-block align-top"
                                        />{' '}

                                        <p>
                                            • Litter classification page: The litter classification section will help users with identifying different types of litter and how to dispose of them correctly.
                                     </p>
                                        <p>
                                            • Disposal sites page: Using our interactive mapping feature, users will have the ability to view different litter disposal sites locations, find litter bins, and identify how to get there. Users can also navigate to the Eventbrite site to create new clean-up events!
                                    </p>
                                        <p>
                                            • Laws and penalties page: For users who want to understand litter legislation, the legal information section will provide users with the latest legislation regarding littering as well as data collected on fines.
                                        </p>
                                    </div>
                                    <p>
                                        With all the above resources, the team hopes that environmental volunteers can be empowered to continue in their attempts to clean the world up bit by bit.
                                            </p>

                                </div>
                            </div>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </Col>
                </Row>

                {/* <Row>


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
            
            
            <img
                            alt="..."
                            className="rounded-circle"
                            src={image2}
                          />       */}

            </Container>

        </>

    );
}

export default ContactUsPage;