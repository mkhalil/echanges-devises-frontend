import React from "react";
import Table from 'react-bootstrap/Table';
import {Button} from "react-bootstrap";

const TauxJournalierDeviseTableComponent = (props) => {


    let listTauxJournalierDevise = props.listTauxJournalierDevise;
    if (listTauxJournalierDevise===undefined) {
        listTauxJournalierDevise = [];
    }
    let tableBody = listTauxJournalierDevise.map(ligne => {
        return (<LineTable key={ligne.id} tauxJournalierDevise={ligne}/>);
    });

    return (
        <Table responsive>
            <HeaderTable/>
            <tbody>
            {tableBody}
            </tbody>
        </Table>
    );
}

const LineTable = (props) => {
    const {tauxJournalierDevise} = props;
    return (
        <tr>
            <td>{tauxJournalierDevise.devise.abreviation}</td>
            <td>{tauxJournalierDevise.date}</td>
            <td>{tauxJournalierDevise.montantAchat}</td>
            <td>{tauxJournalierDevise.montantVente}</td>
            <td>
                <Button variant="secondary" className="mr-2">Editer</Button>
                <Button variant="danger">Supprimer</Button>
            </td>
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
            <th>Actions</th>
        </tr>
        </thead>
    );
}

export default TauxJournalierDeviseTableComponent;