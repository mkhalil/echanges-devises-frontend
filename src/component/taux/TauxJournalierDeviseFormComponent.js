import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as actionTaux from '../../actions/Action';
import {connect} from "react-redux";
import * as Yup from "yup";
import InputNumber from "../InputNumber";
import {Formik} from "formik";
import {NotificationManager} from "react-notifications";
import Api from "../../utiles/Api";
import InputSelectBoxDevises from "../InputSelectBoxDevises";

class TauxJournalierDeviseFormComponent extends React.Component {

    render() {

        return (


            <Formik
                initialValues={{dateTaux: new Date(), deviseId: '', montantAchat: '', montantVente: ''}}
                onSubmit={(values, {setSubmitting}) => {

                    Api.post("/taux-echanges-devises", values).then(v => {
                        NotificationManager.success("Enregistrement avec succés", "Taux journalier de devise");
                        setSubmitting(false);
                        this.props.fetchListTauxJournalierDevise();
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
                        handleReset,
                        setFieldValue,
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <label htmlFor="dateTaux">Date d'échange</label>
                                    <DatePicker selected={values.dateTaux}
                                                dateFormat="dd/MM/YYYY"
                                                className="form-control"
                                                id="dateTaux"

                                                onChange={d => {
                                                    setFieldValue('dateTaux', d);
                                                }}/>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="deviseId">Devise</label>
                                    <InputSelectBoxDevises
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.deviseId}
                                        error={errors.deviseId}
                                        touched={touched.deviseId}
                                    />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="montantAchat">Montant d'achat</label>
                                    <InputNumber
                                        name="montantAchat"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.montantAchat}
                                        error={errors.montantAchat}
                                        touched={touched.montantAchat}/>

                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="montantVente">Montant du vente</label>
                                    <InputNumber
                                        name="montantVente"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.montantVente}
                                        error={errors.montantVente}
                                        touched={touched.montantVente}/>
                                </div>
                                <div className="form-group col-md-4">
                                    <button type="submit" id="enregistrer" className="btn btn-primary marginTop32px"
                                            disabled={isSubmitting}>Enregistrer
                                    </button>
                                    <button type="button" className="btn btn-secondary marginTop32px ml-1"
                                            onClick={handleReset}> Annuler
                                    </button>
                                </div>
                            </div>
                        </form>
                    );
                }}
            </Formik>


        );

    }

}


const mapDispatchToProps = dispatch => {
    return {
        fetchListTauxJournalierDevise: () => dispatch(actionTaux.listTauxJournalierDevise())
    }
}

export default connect(null, mapDispatchToProps)(TauxJournalierDeviseFormComponent);