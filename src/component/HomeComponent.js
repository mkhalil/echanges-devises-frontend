import React from "react";
import TauxDeviseCourant from "./taux/TauxDeviseCourant";
import ConversionComponent from "./ConversionComponent";
import {connect} from "react-redux";
import * as actionTaux from "../actions/TauxJournalierDeviseAction";

class HomeComponent extends React.Component{


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.listCurrentTaux();
    }



    render() {

        return (
            <div className="row">

                <div className="col-md-3">
                    <TauxDeviseCourant tauxDeviseListe={this.props.tauxDeviseListe}/>
                </div>
                <div className="col-md-9">
                    <ConversionComponent/>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {listCurrentTaux: () => dispatch(actionTaux.listCurrentTaux())}
}


const mapStateToProps = (state) => {
    return {
        tauxDeviseListe: state.listCurrentTaux
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
