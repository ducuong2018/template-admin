import Login from "./modules/Login/component/index"
import Dashboard from "./modules/Dashboard/index"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
} from "react-router-dom";

interface IHistory {
    goBack: () => any
    push: (path: string, state?: any) => any
}

let history: IHistory | null = null;

function App() {
    return (
        <Router ref={instance => console.log(instance)}>
            <Switch>
                <Route path="/Dashboard">
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
export {history}
