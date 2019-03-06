import React from "react";
import Table from 'react-bootstrap/Table';
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import * as actionTaux from '../actions/TauxJournalierDeviseAction';

class TauxJournalierDeviseTableComponent extends React.Component {


    constructor(props) {
        super(props);
    }

    onDeleteHandler = (id) => {
        this.props.dispatch({type: actionTaux.SELECTE_TAUX_JOURNALIER_DEVISE, payload: id});
        this.props.dispatch({type: 'SHOW_MODAL'});
    }


    onSelectLineHandler = (id) => {
        this.props.dispatch({type: actionTaux.SELECTE_TAUX_JOURNALIER_DEVISE, payload: id});
    }



    render() {

        let listTauxJournalierDevise = this.props.listTauxJournalierDevise;

        let tableBody = listTauxJournalierDevise.map(ligne => {
            let className = ligne.id === this.props.selectedTauxId ? 'table-primary' : '';
            return (


                <tr key={ligne.id} onClick={() => this.onSelectLineHandler(ligne.id)} className={className}>
                    <td>{ligne.devise.abreviation}</td>
                    <td>{ligne.date}</td>
                    <td>{ligne.montantAchat}</td>
                    <td>{ligne.montantVente}</td>
                    <td>
                        <Button variant="secondary" className="mr-2">Editer</Button>
                        <Button variant="danger" onClick={() => this.onDeleteHandler(ligne.id)}>Supprimer</Button>
                    </td>
                </tr>)


        });
        return (
            <Table responsive className="table-hover">
                <thead>
                <tr>
                    <th>Devise</th>
                    <th>Date</th>
                    <th>Montant d'achat</th>
                    <th>Montant du vente</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody onBlur={() => this.onSelectLineHandler('')}>
                {tableBody}
                </tbody>
            </Table>
        );
    }


    componentDidMount() {
        this.props.dispatch(actionTaux.listTauxJournalierDevise());
    }


}

const mapStateToProps = (state) => {
    return {
        listTauxJournalierDevise: state.listTauxJournalierDevise,
        selectedTauxId:state.selectedTauxId
    }
}


export default connect(mapStateToProps)(TauxJournalierDeviseTableComponent);