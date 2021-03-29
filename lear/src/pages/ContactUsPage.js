import React from 'react';
import { Link } from 'react-router-dom';

const ContactUsPage = () => (
    <>
        <h1>Contact Us</h1>
        <div id="bodyblock">
        <h3>Team number: MP14</h3>
        <h3>Mahara Page:</h3>
        <Link to={{ pathname: "http://bit.ly/MP14-LEAR" }} target="_blank" >
        
            
            Click here
            </Link>
    </div>
        
    </>

);

export default ContactUsPage;