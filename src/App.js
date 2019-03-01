import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import BodyContainer from "./container/BodyContainer";
import HeaderContainer from "./container/HeaderContainer";
import './CustomStyle.css';
class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer/>
                <BodyContainer/>
            </div>
        );
    }
}

export default App;
