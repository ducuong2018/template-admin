import React, {  Component } from 'react';
import Login from "./modules/Login/component/SignIn";
import Dashboard from "./modules/dashboard/index"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import { observer } from 'mobx-react';

export let history:IHistory
interface IHistory {
    goBack: () => any
    push: (path: string, state?: any)=>any

}
@observer
class App extends Component<any,any> {
    private static RouterRef = React.createRef<Router>();
    static get history(): IHistory {
        return (App.RouterRef.current as any).history;
    }
  render(){
    return (
        <Router  ref={instance  => {console.log(instance)} }>
            <Switch>
            <Route path="/dashboard" component={Dashboard}>
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
    
}


export default App;

