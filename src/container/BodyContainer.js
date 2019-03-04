import React from "react";
import TauxJournalierDeviseContainer from "./TauxJournalierDeviseContainer";

class BodyContainer extends React.Component {

    render() {

        return (
            <div className="container container-pading-top">
                <div className="row">
                    <div className="col-md-12">
                      <TauxJournalierDeviseContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyContainer;


