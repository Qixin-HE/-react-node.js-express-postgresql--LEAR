import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from './images/5120mp14logo.png';
import SearchBar from './components/SearchBar';


const state = {
    val: ''
};


const NavBar = () => {
    //const [keyword, setKeyword] = useState();

    return (
    <>
    <h5 class="text-dark font-weight-light" style={{ width: "100%"}}>
        <Navbar bg="light" variant="light" style={{ paddingRight: "200px",position: "fixed",
    width: "100%",zIndex: "500",
    marginTop: "-20px"}}>
        
            <Nav className="container-fluid">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="130"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>


                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contactus">About Us</Nav.Link>
                <Nav.Link href="/litterclassification">Litter Classification</Nav.Link>
                <Nav.Link href="/article-list">Laws and Penalties</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
                
                <>
                    {/* <SearchBar /> */}
                </>
            </Nav>



            
        </Navbar>
        </h5>
    </>


);
}

export default NavBar;

