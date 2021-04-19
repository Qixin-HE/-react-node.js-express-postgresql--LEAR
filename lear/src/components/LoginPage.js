import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "./Provider";
import Provider from "./Provider";
import PropTypes from 'prop-types';



const LoginPage = ({ setToken }) => {
    //const { password, updatePassword } = useContext(Context);
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = e => {
        e.preventDefault()
        const token = login(password);
        if (!token) {
            alert("Password is not correct, please try again.")
        }
    }

    return (
        <div>
            <p>Enter the password:</p>

            <input type="password" onChange={e => setPassword(e.target.value)} />

            <div>
                <button type="submit">Submit</button>
            </div>

        </div>
    )
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default LoginPage;