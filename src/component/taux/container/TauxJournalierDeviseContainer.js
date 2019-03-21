import React from "react";
import TauxJournalierDeviseTableComponent from "../TauxJournalierDeviseTableComponent";
import TauxJournalierDeviseFormComponent from "../TauxJournalierDeviseFormComponent";


const tauxJournalierDeviseContainer = () => {


    return (

        <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    <TauxJournalierDeviseFormComponent/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">

                    <TauxJournalierDeviseTableComponent/>
                </div>
            </div>

        </React.Fragment>
    );

}

export default tauxJournalierDeviseContainer;