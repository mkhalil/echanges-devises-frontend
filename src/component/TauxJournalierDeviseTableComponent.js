import React from "react";
import Table from 'react-bootstrap/Table';
import Api from "../utiles/Api";

class TauxJournalierDeviseTableComponent extends React.Component {

    state = {
        tauxJournalierDeviseListe: []
    }


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Api.get("/taux-echanges-devises").then(result => {
                console.log(result.data);
                this.setState({tauxJournalierDeviseListe: result.data});
            }
        );
    }



    render() {
        let tauxJournalierDeviseListe = this.state.tauxJournalierDeviseListe.map(ligne =>{
            console.log(ligne);
            return (<LineTable key={ligne.id} tauxJournalierDevise={ligne} /> );
        });

        return (
            <Table responsive>
                <HeaderTable />
                <tbody>
                    {tauxJournalierDeviseListe}
                </tbody>
            </Table>
        );
    }
}

const LineTable = (props) => {
    const {tauxJournalierDevise} = props;
    return (
        <tr>
            <td>{tauxJournalierDevise.devise.abreviation}</td>
            <td>{tauxJournalierDevise.date}</td>
            <td>{tauxJournalierDevise.montantAchat}</td>
            <td>{tauxJournalierDevise.montantVente}</td>
        </tr>
    )
}

const HeaderTable = (props) => {
    return (
        <thead>
        <tr>
            <th>Devise</th>
            <th>Date</th>
            <th>Montant d'achat</th>
            <th>Montant du vente</th>
        </tr>
        </thead>
    );
}

export default TauxJournalierDeviseTableComponent;