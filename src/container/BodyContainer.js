import React from "react";
import TauxEchangesDevisesContainer from "./TauxEchangesDevisesContainer";

class BodyContainer extends React.Component {

    render() {

        return (
            <div className="container container-pading-top">
                <div className="row">
                    <div className="col-md-12">
                      <TauxEchangesDevisesContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyContainer;


