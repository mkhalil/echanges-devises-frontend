import React from "react";

class LineTauxJournalierDeviseComponent extends React.Component{


    constructor(props) {
        super(props);
        this.tauxJournalierDevise = props.tauxJournalierDevise;
    }



    render() {
        return (
            <tr>
                <td>{this.tauxJournalierDevise.devise.abreviation}</td>
                <td>{this.tauxJournalierDevise.date}</td>
                <td>{this.tauxJournalierDevise.montantAchat}</td>
                <td>{this.tauxJournalierDevise.montantVente}</td>
            </tr>
        );
    };

}

export default LineTauxJournalierDeviseComponent;