import React from "react";
import {Button, Modal} from "react-bootstrap";

const editTauxJournalierDeviseModalComponent = (props) => {
    return (


        <Modal show={props.showEditModal} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editer</Modal.Title>
            </Modal.Header>
            <Modal.Body>

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

export default editTauxJournalierDeviseModalComponent;