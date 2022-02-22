import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api'; 


const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('this is the handle submit');

        const createUser = async (username, password) => {
            console.log('These are the arguments', username, password)
            const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                     
                        username: username,
                        password: password,
                    
                })
            });
            console.log('This is the response', response);
            if (response) {
                const  { token }  = await response.json();
                console.log("this is the token:", token)
                localStorage.setItem("token", token)
            } 

            
            return response;
            
        }
        
        createUser(username, password)
        setUsername('');
        setPassword('');
        
       }
    
    const locallySourcedToken = localStorage.getItem('token');

    return (
        <div>
            <form onSubmit={handleSubmit} className='registerForm'>

                <input type = "text" placeholder = "New Username" value = {username} onChange={(event) => setUsername(event.target.value)}></input>

                <input type = "text" placeholder = "New Password" value = {password} onChange={(event) => setPassword(event.target.value)}></input>

                <button type = "submit" className="button">
                    Create New Account
                </button>
            </form>
        </div>
    )
}

export default Register;