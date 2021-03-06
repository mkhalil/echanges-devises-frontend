import React from "react";
import Table from 'react-bootstrap/Table';
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import * as actionTaux from '../../actions/Action';
import alertPopup from '../../utiles/AlertPopup';
import EditTauxJournalierDeviseModalComponent from "./EditTauxJournalierDeviseModalComponent";
import moment from "moment";
import MontantEnDT from "../MontantEnDT";

class TauxDeviseTableComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {showEditModal: false};
    }

    selectedTaux = {};

    onConfirmeDeleteHandler = (id) => {
        alertPopup.fire({
            title: 'Suppression de taux',
            text: "Voulez-vous supprimer ce taux ?",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui'
        }).then((result) => {
            if (result.value) {
                this.props.deleteTauxJournalierDevise(id);
            }
        });
    }


    handleCloseEditModal() {
        this.setState({showEditModal: false});
    }

    handleShowEditModal(selectedTaux) {
        this.setState({showEditModal: true});
        this.selectedTaux = selectedTaux;
    }

    toddMMYYYY = (date) => {
        return moment(date).format('DD/MM/YYYY');
    }

    render() {

        let listTauxJournalierDevise = this.props.listTauxJournalierDevise;

        let tableBody = listTauxJournalierDevise.map(tauxJournalier => {
            return (


                <tr key={tauxJournalier.id}>
                    <td>{tauxJournalier.devise.abreviation}</td>
                    <td>{this.toddMMYYYY(tauxJournalier.dateTaux)}</td>
                    <td>
                        <MontantEnDT montant={tauxJournalier.montantAchat}/>
                    </td>
                    <td>
                        <MontantEnDT montant={tauxJournalier.montantVente}/>
                    </td>
                    <td>
                        <Button variant="warning" className="mr-2"
                                onClick={() => this.handleShowEditModal(tauxJournalier)}>Editer</Button>
                        <Button variant="danger"
                                onClick={() => this.onConfirmeDeleteHandler(tauxJournalier.id)}>Supprimer</Button>
                    </td>
                </tr>)


        });
        return (
            <React.Fragment>
                <Table responsive className="table-hover">
                    <thead>
                    <tr className="table-primary">
                        <th>Devise</th>
                        <th>Date</th>
                        <th>Montant d'achat</th>
                        <th>Montant du vente</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableBody}
                    </tbody>
                </Table>
                <EditTauxJournalierDeviseModalComponent selectedTaux={this.selectedTaux}
                                                        showEditModal={this.state.showEditModal}
                                                        handleClose={() => this.handleCloseEditModal()}/>
            </React.Fragment>
        );
    }


    componentDidMount() {
        this.props.fetchListTauxDevise();
    }


}

const mapStateToProps = (state) => {
    return {listTauxJournalierDevise: state.listTauxJournalierDevise}
}


const mapDispatchToProps = dispatch => {
    return {
        fetchListTauxDevise: () => dispatch(actionTaux.listTauxDevise()),
        deleteTauxJournalierDevise: (id) => dispatch(actionTaux.deleteTauxDevise(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TauxDeviseTableComponent);