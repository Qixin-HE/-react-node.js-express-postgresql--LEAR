import React, { useState } from 'react';
import { Form, Button, } from 'react-bootstrap';
import PropTypes from 'prop-types';

/* The login function, return the boolean to check if the input password matches the 
 true/hardcoded password. */

const login = password => {
    return "lear" === password
}

/* The Login page will show when the user is first into the website/new session starts. */
const LoginPage = ({ setToken }) => {
    
//This state save the user input in the password input box. It will change when user is typing.
    const [password, setPassword] = useState();
    //This function will be triggered when user click on "Submit" button. It check the input password.
    const handleSubmit = e => {
        e.preventDefault();
        const token = login(password);
        if (!token) {
            alert("Password is not correct, please try again.")
        }

        setToken(token);
    }



    return (
        <div id="login-body" >
            <div class="loin-wrapper">
                           
                    <Form onSubmit={handleSubmit}>
                    
                        <Form.Group controlId="formBasicPassword">
                        
                            <Form.Control style={{width:"200%", textAlign:"center"}}type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            
                        </Form.Group>
                        
                        <Button variant="info" type="submit">Submit</Button>
                    </Form>
                </div>

            </div >
        

    )
};

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default LoginPage;