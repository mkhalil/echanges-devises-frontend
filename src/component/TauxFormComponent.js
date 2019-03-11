import React from "react";
import {Formik} from "formik";
import * as Yup from "yup";


class TauxFormComponent extends React.Component {

    devises = [
        {text: 'Devise', value: ''},
        {text: 'Euro', value: 1},
        {text: 'Dollar', value: 2},

    ]


    render() {
        const options = this.devises.map(option => <option key={option.value}
                                                           value={option.value}>{option.text}</option>);
        return (<Formik
            initialValues={{deviseId: '', montantAchat: '', montantVente: ''}}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
            validationSchema={Yup.object().shape({
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
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <label htmlFor="deviseId">Devise</label>
                                <select className={errors.deviseId ? 'custom-select is-invalid' : 'custom-select'}
                                        name="deviseId" onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.deviseId}>
                                    {options}
                                </select>
                                {errors.deviseId && <div className="invalid-feedback invalid">{errors.deviseId} </div>}
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="montantAchat">Montant d'achat</label>
                                <input
                                    className={errors.montantAchat && touched.montantAchat ? 'form-control is-invalid' : 'form-control'}
                                    name="montantAchat"
                                    type="number"
                                    placeholder="Montant d'achat"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.montantAchat}
                                    min="0" step="0.01"/>

                                {errors.montantAchat && touched.montantAchat &&
                                <div className="invalid-feedback invalid">{errors.montantAchat} </div>}

                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="montantVente">Montant du vente</label>
                                <input name="montantVente" type="number" placeholder="Montant du vente"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.montantVente}
                                       className={errors.montantVente ? 'form-control is-invalid' : 'form-control'}
                                       min="0" step="0.01"/>
                                {errors.montantVente &&
                                <div className="invalid-feedback invalid">{errors.montantVente} </div>}
                            </div>
                            <div className="form-group col-md-4">
                                <button type="submit" id="enregistrer" className="btn btn-primary marginTop32px"
                                        disabled={isSubmitting}>Enregistrer
                                </button>
                            </div>
                        </div>

                    </form>
                );
            }}
        </Formik>);

    }

};

export default TauxFormComponent;