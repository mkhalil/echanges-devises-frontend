import React from "react";
import TauxJournalierDeviseContainer from "../component/taux/container/TauxJournalierDeviseContainer";
import {Route, Switch} from "react-router-dom";
import HomeComponent from "../component/HomeComponent";

class HomeContainer extends React.Component {

    render() {

        return (
            <div className="container-fluid container-pading-top">

                <Switch>
                    <Route path='/taux-journalier-devises' component={TauxJournalierDeviseContainer}/>
                    <Route path='/' component={HomeComponent}/>
                </Switch>

            </div>
        );
    }
}

export default HomeContainer;


