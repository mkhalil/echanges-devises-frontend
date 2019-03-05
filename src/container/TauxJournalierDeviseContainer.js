import React from "react";
import {connect} from 'react-redux';
import * as actionTaux from '../actions/TauxJournalierDeviseAction';
import TauxJournalierDeviseTableComponent from "../component/TauxJournalierDeviseTableComponent";
import TauxJournalierDeviseFormComponent from "../component/TauxJournalierDeviseFormComponent";


class TauxJournalierDeviseContainer extends React.Component {


    constructor(props) {
        super(props);
        console.log("PROPS MAP", props.tauxJournalierDevise);
    }


    componentDidMount() {
        this.props.dispatch(actionTaux.listTauxJournalierDevise());
    }

    render() {

        return (

            <div>
                <TauxJournalierDeviseFormComponent/>
                <TauxJournalierDeviseTableComponent listTauxJournalierDevise={this.props.listTauxJournalierDevise}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listTauxJournalierDevise: state.listTauxJournalierDevise
    }
}

export default connect(mapStateToProps)(TauxJournalierDeviseContainer);