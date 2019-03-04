import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import BodyContainer from "./container/BodyContainer";
import HeaderContainer from "./container/HeaderContainer";
import './CustomStyle.css';
import {NotificationContainer} from "react-notifications";
import 'react-notifications/lib/notifications.css';

class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer/>
                <BodyContainer/>
                <NotificationContainer/>
            </div>
        );
    }
}

export default App;
