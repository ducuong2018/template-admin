import React, {  Component } from 'react';
import { observer } from 'mobx-react';
import ListRouter from "../src/router/index";
@observer
export default class App extends Component<any,any> {
  render(){
    return (
        <React.Fragment>
          <ListRouter/>
        </React.Fragment>

    )
  }
    
};

