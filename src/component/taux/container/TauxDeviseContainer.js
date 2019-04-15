import React from "react";
import TauxDeviseTableComponent from "../TauxDeviseTableComponent";
import TauxDeviseFormComponent from "../TauxDeviseFormComponent";


const tauxDeviseContainer = () => {


    return (

        <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    <TauxDeviseFormComponent/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <TauxDeviseTableComponent/>
                </div>
            </div>

        </React.Fragment>
    );

}

export default tauxDeviseContainer;