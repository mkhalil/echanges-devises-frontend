import React from "react";
import {Button, Modal} from "react-bootstrap";
import Api from "../../utiles/Api";
import {NotificationManager} from "react-notifications";
import * as Yup from "yup";
import {Formik} from "formik";
import DatePicker from "react-datepicker";
import InputNumber from "../InputNumber";
import InputSelectBoxDevises from "../InputSelectBoxDevises";
import * as actionTaux from "../../actions/Action";
import connect from "react-redux/es/connect/connect";

const editTauxJournalierDeviseModalComponent = (props) => {


    const {selectedTaux, showEditModal, handleClose} = props;

    let taux = selectedTaux;
    if (selectedTaux.devise !== undefined) {
        taux.deviseId = selectedTaux.devise.id;
    }

    return (


        <Modal show={showEditModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editer</Modal.Title>
            </Modal.Header>

            <Formik
                initialValues={taux}
                onSubmit={(values, {setSubmitting}) => {

                    Api.put("/taux-devises/" + taux.id, values).then(v => {
                        NotificationManager.success("Enregistrement avec succés", "Taux journalier de devise");
                        setSubmitting(false);
                        props.fetchListTauxDevise();
                        handleClose();
                    }).catch(error => {
                        console.log("Erreur d'enregistrement", error.response);
                        const errorMessage = error.response.data.message;
                        NotificationManager.error(errorMessage, "Erreur d'enregistrement");
                        setSubmitting(false);
                    });


                }}
                validationSchema={Yup.object().shape({
                    dateTaux: Yup.date().required('Date obligatoire'),
                    deviseId: Yup.number().required('Devise est obligatoire'),
                    montantAchat: Yup.number().positive('Montant d\'achat doit être > 0').required('Montant est obligatoire'),
                    montantVente: Yup.number().positive('Montant du vente doit être > 0').required('Montant est obligatoire')
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        setFieldValue
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <Modal.Body>


                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="dateTaux">Date d'échange</label>
                                        <DatePicker selected={new Date(values.dateTaux)}
                                                    dateFormat="dd/MM/YYYY"
                                                    className="form-control"
                                                    id="dateTaux"
                                                    onChange={d => {
                                                        setFieldValue('dateTaux', d);
                                                    }}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="deviseId">Devise</label>
                                        <InputSelectBoxDevises
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.deviseId}
                                            error={errors.deviseId}
                                            touched={touched.deviseId}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">

                                    <div className="form-group col-md-6">
                                        <label htmlFor="montantAchat">Montant d'achat</label>
                                        <InputNumber
                                            name="montantAchat"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.montantAchat}
                                            error={errors.montantAchat}
                                            touched={touched.montantAchat}/>

                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="montantVente">Montant du vente</label>
                                        <InputNumber
                                            name="montantVente"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.montantVente}
                                            error={errors.montantVente}
                                            touched={touched.montantVente}/>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                                    Enregistrer
                                </button>
                                <Button variant="secondary" onClick={handleClose}>
                                    Annuler
                                </Button>
                            </Modal.Footer>
                        </form>
                    );
                }}


            </Formik>


        </Modal>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        fetchListTauxDevise: () => dispatch(actionTaux.listTauxDevise()),
    }
}


export default connect(null, mapDispatchToProps)(editTauxJournalierDeviseModalComponent);