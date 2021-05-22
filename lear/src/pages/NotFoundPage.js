import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../images/5120mp14logo.jpg';

//When the path is not avaliable, the route will match with this page.
const NotFoundPage = () => (
    <>

    <h1 class="text-dark font-weight-light" style={{paddingTop: "40px"}} >404: Page  Not Found</h1>
    <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
                                    <img
                                        alt="logo"
                                        src={logo}
                                        style={{
                                            marginTop: "20px",
                                            width: "80%",
                                            marginLeft: "20px"
                                        }}

                                        className="d-inline-block align-top"
                                    />{' '}
                                    </Container>
    </>

);

export default NotFoundPage;