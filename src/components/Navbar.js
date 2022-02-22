import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false);
        }
    }, [])

    return (
        <div className="Header">
            <nav className="NavBar">
                <div>
                 <p className="title"> Fitness Tracker </p>
                </div>

                <div>
                    <li><Link to="/" style={{textDecoration:"none"}}>Home Page</Link></li>
                </div>

                
                <div>
                    <li><Link to="/activities" style={{textDecoration:"none"}}>Activities</Link></li>
                </div>

                
                <div>
                    <li><Link to="/routines" style={{textDecoration:"none"}}>Routines</Link></li>
                </div>

                <div>
                    {
                        !isLoggedIn ?

                        <><div className="loginRegister">
                        <li><Link to="/login" style={{textDecoration:"none"}}>Login</Link></li>
                        </div> </>:

                        <><li><Link to ="/" style={{textDecoration:"none"}} onClick={() => {
                            localStorage.removeItem("token");
                            setIsLoggedIn(false);

                        }}>Logout</Link></li></>

                    }
                </div>

                <div>
                    {
                        isLoggedIn ?
                         <div>Logged In!</div>
                        :
                        <div className="loginRegister">
                            <li><Link to="/register" style={{textDecoration:"none"}} >Register</Link></li>
                        </div>
                    }
                    
                </div>

            </nav>
        </div>
    )
}

export default NavBar;