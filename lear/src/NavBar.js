import React from 'react';

import { Navbar, Nav} from 'react-bootstrap';
import logo from './images/5120mp14logo.jpg';
//import SearchBar from './components/SearchBar';


const state = {
    val: ''
};


const NavBar = () => {
    //const [keyword, setKeyword] = useState();

    return (
    <>
    <h5 class="text-dark font-weight-light" style={{ width: "100%"}}>
        <Navbar bg="light" variant="light" style={{ paddingRight: "200px",position: "fixed",
    width: "100%",zIndex: "500", marginTop: "-20px", paddingTop: "15px"}}>
        
            <Nav className="container-fluid">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="130"
                        height="60"
                        className="d-inline-block align-top"
                        style={{height: "90%", marginBottom: "-3px"}}
                    />{' '}
                </Navbar.Brand>


                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contactus">About Us</Nav.Link>
                <Nav.Link href="/litterclassification">Litter Classification</Nav.Link>
                <Nav.Link href="/article-list">Laws and Penalties</Nav.Link>
                <Nav.Link href="/events">Disposal sites</Nav.Link>
                
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

