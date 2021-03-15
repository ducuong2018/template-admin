import React from 'react';
import Login from "./modules/Login/component/index"
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
                <Route  path="/Dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/">
                    <Login/>
                </Route>
            </Switch>
        </Router>

    )
}


export default App;

