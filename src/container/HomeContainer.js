import React from "react";
import TauxDeviseContainer from "../component/taux/container/TauxDeviseContainer";
import {Route, Switch} from "react-router-dom";
import HomeComponent from "../component/HomeComponent";

class HomeContainer extends React.Component {

    render() {

        return (
            <div className="container-fluid container-pading-top">

                <Switch>
                    <Route path='/taux-devises' component={TauxDeviseContainer}/>
                    <Route path='/' component={HomeComponent}/>

                </Switch>

            </div>
        );
    }
}

export default HomeContainer;


