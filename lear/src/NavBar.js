import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from './images/5120mp14logo.png';

//a Component
// const NavBar = () => (
//     <nav>

//         <ul>

//             <img src = {logo} style = {{height: '200px', objectFit:'contain'}}/>

//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/litterclassification">Litter Classification</Link>
//             </li>
//             <li>
//                 <Link to="/article-list">Laws and Penalties</Link>
//             </li>
//             <li>
//                 <Link to="/contactus">Contact Us</Link>
//             </li>
//         </ul>
//     </nav>
// );
// export default NavBar;




const NavBar = () => (
    <>
        <Navbar bg="light" variant="light">
                
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
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/litterclassification">Litter Classification</Nav.Link>
                    <Nav.Link href="/article-list">Laws and Penalties</Nav.Link>
                    <Nav.Link href="/article-list">Events</Nav.Link>
                    <Nav.Link href="/contactus">Contact Us</Nav.Link>
                    
                </Nav>
                

                
            
        </Navbar>
    </>


);

export default NavBar;

