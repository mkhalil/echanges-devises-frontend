import React from "react";
import TauxJournalierDeviseTableComponent from "../component/TauxJournalierDeviseTableComponent";
import TauxJournalierDeviseFormComponent from "../component/TauxJournalierDeviseFormComponent";


const tauxJournalierDeviseContainer = () => {


    return (

        <div>
            <TauxJournalierDeviseFormComponent/>
            <TauxJournalierDeviseTableComponent/>
        </div>
    );

}

export default tauxJournalierDeviseContainer;