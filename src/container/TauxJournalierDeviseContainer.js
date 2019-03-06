import React from "react";
import {connect} from 'react-redux';
import TauxJournalierDeviseTableComponent from "../component/TauxJournalierDeviseTableComponent";
import TauxJournalierDeviseFormComponent from "../component/TauxJournalierDeviseFormComponent";
import AlertConfirmeComponent from "../component/AlertConfirmeComponent";


const tauxJournalierDeviseContainer = (props) => {


    return (

        <div>
            <TauxJournalierDeviseFormComponent/>
            <TauxJournalierDeviseTableComponent/>
            <AlertConfirmeComponent/>
        </div>
    );

}

export default connect()(tauxJournalierDeviseContainer);