import React from "react";
import {connect} from 'react-redux';
import * as actionTaux from '../actions/TauxJournalierDeviseAction';


class TauxJournalierDeviseContainer extends React.Component {


    constructor(props) {
        super(props);
        console.log("PROPS MAP", props.tauxJournalierDevise);
    }


    componentDidMount() {
        this.props.dispatch(actionTaux.listTauxJournalierDevise());
    }


    render() {
        console.log("PROPS MAP", this.props.tauxJournalierDevise);

        return (
            <div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tauxJournalierDevise: state
    }
}

export default connect(mapStateToProps)(TauxJournalierDeviseContainer);