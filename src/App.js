import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Homepage, Login, Register, NavBar, Activities, Routines } from "./components"

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false);
        }
    }, [])

    return (
        <div>

            <NavBar />

                <div className="switchcontainer">

                    <Switch>
                        <Route exact path="/" component= {Homepage}/>
                        <Route path="/register" component= {Register}/>
                        <Route path="/login" component= {Login}/>
                        <Route path="/routines" component= {Routines}/>
                        <Route path="/activities" component= {Activities}/>
                    </Switch>

                </div>
        </div>
    )
}

export default App;
