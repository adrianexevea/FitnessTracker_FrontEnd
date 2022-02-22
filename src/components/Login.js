import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';
const locallySourcedToken = localStorage.getItem('token');

const LoginForm = () => {
    
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        const loginUser = async (usernameInput, passwordInput) => {
        
            try {
                const response = await fetch(`${BASE_URL}/users/login`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                         
                            username: usernameInput,
                            password: passwordInput,
                        
                    })
                })
                console.log('this is the response:', response)
        
                if (response) {
                    const  { token }  = await response.json();
                    console.log("this is the token:", token)
                    localStorage.setItem("token", token)
                    
                }
            } catch (err) {
                console.log(err);
            }
        }
        loginUser(username, password)
        setUsername('');
        setPassword('');
    }
        
        
    

    return (
        <div className="postForm">
            <form onSubmit={handleSubmit}>
                <label>Enter Username</label>
                <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}></input><br></br>

                <label>Enter Password </label>
                <input type="text" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}></input><br></br>

                <button type="submit" className="button">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;