import React from 'react';
import Login from "./modules/Login/component/SignIn"
import Dashboard from "./modules/Dashboard/index"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    return (
        <Router  ref={instance => {console.log(instance)} }>
            <Switch>
                <Route  path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/">
                    <Login/>
                </Route>
                <Route path = "/sign-up">

                </Route>
            </Switch>
        </Router>

    )
}


export default App;

