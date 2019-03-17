import React from "react";
import TauxDeviseCourant from "./taux/TauxDeviseCourant";
import ConversionComponent from "./ConversionComponent";

class HomeComponent extends React.Component{

    render() {

        return (
            <div className="row">

                <div className="col-md-3">
                    <TauxDeviseCourant/>

                </div>
                <div className="col-md-9">
                    <ConversionComponent/>
                </div>
            </div>
        );
    }
}

export default HomeComponent;