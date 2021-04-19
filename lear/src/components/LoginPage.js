import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import { Form, Button, } from 'react-bootstrap';
import PropTypes from 'prop-types';

const login = password => {
    return "lear" === password
}

const LoginPage = ({ setToken }) => {
    //const { password, updatePassword } = useContext(Context);

    const [password, setPassword] = useState();
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