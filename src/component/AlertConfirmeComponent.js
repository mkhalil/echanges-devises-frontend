import React from "react";
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import * as actionTaux from '../actions/TauxJournalierDeviseAction';

const alertConfirmeComponent = (props) => {

    const showConfirmModel = props.showConfirmModel === true;

    return (
        <Modal show={showConfirmModel} onHide={() => props.dispatch({type:'HIDE_MODAL'})}>
            <Modal.Header closeButton>
                <Modal.Title>Suppression</Modal.Title>
            </Modal.Header>
            <Modal.Body>Voulez-vous vraiment supprimer ce taux ?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">
                    Annuler
                </Button>
                <Button variant="primary" onClick={() => props.dispatch(actionTaux.deleteTauxJournalierDevise(props.selectedTauxId))}>
                    Supprimer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}


const mapStateToProps = (state) => {
    return {
        showConfirmModel: state.showConfirmModel,
        selectedTauxId:state.selectedTauxId

    }
}

export default connect(mapStateToProps)(alertConfirmeComponent);
