import React from "react";
import Table from 'react-bootstrap/Table';
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import * as actionTaux from '../actions/TauxJournalierDeviseAction';
import alertPopup from '../utiles/AlertPopup';
import DatePicker from "react-datepicker";
import Input from "./Input";

class TauxJournalierDeviseTableComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {showEditModal: false}
    }

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

    handleShowEditModal() {
        this.setState({showEditModal: true});
    }

    render() {

        let listTauxJournalierDevise = this.props.listTauxJournalierDevise;

        let tableBody = listTauxJournalierDevise.map(tauxJournalier => {
            let className = tauxJournalier.id === this.props.selectedTauxId ? 'table-primary' : '';
            return (


                <tr key={tauxJournalier.id} className={className}>
                    <td>{tauxJournalier.devise.abreviation}</td>
                    <td>{tauxJournalier.date}</td>
                    <td>{tauxJournalier.montantAchat}</td>
                    <td>{tauxJournalier.montantVente}</td>
                    <td>
                        <Button variant="secondary" className="mr-2"
                                onClick={() => this.handleShowEditModal()}>Editer</Button>
                        <Button variant="danger"
                                onClick={() => this.onConfirmeDeleteHandler(tauxJournalier.id)}>Supprimer</Button>
                    </td>
                </tr>)


        });
        return (
            <React.Fragment>
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
                    <tbody>
                    {tableBody}
                    </tbody>
                </Table>
                <EeditModal showEditModal={this.state.showEditModal} handleClose={() => this.handleCloseEditModal()}/>
            </React.Fragment>
        );
    }


    componentDidMount() {
        this.props.fetchListTauxJournalierDevise();
    }


}

const mapStateToProps = (state) => {
    return {
        listTauxJournalierDevise: state.listTauxJournalierDevise,
        selectedTauxId: state.selectedTauxId
    }
}

const EeditModal = (props) => {
    return (

        <Modal show={props.showEditModal} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group row">
                        <label htmlFor="dateTaux" class="col-sm-6 col-form-label">Date d'échange</label>
                        <div className="col-sm-6">
                            <DatePicker selected={props.dateTaux} dateFormat="dd/MM/YYYY" className="form-control"
                                        id="dateTaux"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="montantAchat" class="col-sm-6 col-form-label">Montant d'achat</label>
                        <div className="col-sm-6">
                            <Input name="montantAchat" type="number" placeholder="Montant d'achat"
                                   value={props.montantAchat}
                                   required={true}
                                   validateMessage="Montant d'achat doit être > 0"/>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Annuler
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Enregistrer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        fetchListTauxJournalierDevise: () => dispatch(actionTaux.listTauxJournalierDevise()),
        deleteTauxJournalierDevise: (id) => dispatch(actionTaux.deleteTauxJournalierDevise(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TauxJournalierDeviseTableComponent);