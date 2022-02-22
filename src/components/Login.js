import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';
const locallySourcedToken = localStorage.getItem('token');

const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (usernameInput, passwordInput) => {
    
        try {
            const request = await fetch(`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        
                        username: usernameInput,
                        password: passwordInput,
                    
                })
            })
            const response = await request.json();
            console.log('this is the response:', response)
    
            if (!response['error']) {
                const token = response["token"]
                console.log("this is the token:", token)
                localStorage.setItem("token", token)
            }
            else{
                window.alert(response["error"])
            }
        } catch (err) {
            console.log(err);
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        loginUser(username, password)
        .then(function(response){
            if(response){
                setUsername('');
                setPassword('');
            }
            else {
                window.location.reload();
            };
        });
    };
        
        
    

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

export default Login;