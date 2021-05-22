import { useState } from 'react';

//This function save the password to the session. User can enter the website without input the 
//password again in the same session.
export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
      };
    
      const [token, setToken] = useState(getToken());
    
      const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
      };
    
      return {
        setToken: saveToken,
        token
      }

}