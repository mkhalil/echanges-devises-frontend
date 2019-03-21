import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HomeContainer from "./container/HomeContainer";
import HeaderContainer from "./component/HeaderComponent";
import './CustomStyle.css';
import {NotificationContainer} from "react-notifications";
import 'react-notifications/lib/notifications.css';
class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer/>
                <HomeContainer/>
                <NotificationContainer/>
            </div>
        );
    }
}

export default App;
