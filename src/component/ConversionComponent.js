import React from "react";
import InputSelectBox from "./InputSelectBox";
import Api from "../utiles/Api";
import {Formik} from "formik";
import * as Yup from "yup";
import InputNumber from "./InputNumber";

class ConversionComponent extends React.Component {

    state = {
        devisesOptions: []
    }

    toDevisesOptions = (result) => {
        return (
            [{text: 'Devise', value: ''}, ...(result.map(taux => {
                return {text: taux.devise.abreviation, value: taux.devise.id}
            }))]
        );
    }

    constructor(props) {
        console.log("........Coontructore............");
        super(props);

    }


    componentDidMount() {
        Api.get("/taux-echanges-devises/current").then(result => {
            this.setState({devisesOptions: this.toDevisesOptions(result.data)});
        });
    }




    render() {


        return (
            <React.Fragment>

                <div className="card bg-light">
                    <div className="card-header"><strong>Conversion</strong></div>
                    <div className="card-body">

                        <Formik initialValues={{deviseId : '', montant : '' ,montantAchat: '', montantVente: ''}}
                                validationSchema={Yup.object().shape({
                                    deviseId: Yup.number().required('Devise est obligatoire'),
                                    montant: Yup.number().positive('Montant d\'achat doit être > 0').required('Montant est obligatoire')
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
                            <form>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <label htmlFor="deviseId">Devise</label>
                                        <InputSelectBox
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.deviseId}
                                            error={errors.deviseId}
                                            touched={touched.deviseId}
                                            name="deviseId"
                                            options={this.state.devisesOptions}
                                        />
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="montant">Montant</label>
                                        <InputNumber
                                            name="montant"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.montant}
                                            error={errors.montant}
                                            touched={touched.montant}/>
                                    </div>

                                    <div className="form-group col">
                                        <label htmlFor="montantAchat">Montant Achat</label>
                                        <InputNumber
                                            disabled
                                            name="montantAchat"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.montantAchat}
                                            error={errors.montantAchat}
                                            touched={touched.montantAchat}/>
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="montantVente">Montant Vente</label>
                                        <InputNumber
                                            disabled
                                            name="montantVente"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.montantVente}
                                            error={errors.montantVente}
                                            touched={touched.montantVente}/>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-primary">Convertir</a>

                            </form> );
                            }}
                        </Formik>



                        <footer className="card-text">cours d'echange 1Euro = 1.200 Dinar (Dernière mise à jour :
                            2019-02-14 16:19)
                        </footer>
                    </div>
                </div>
            </React.Fragment>
        );

    }

}

export default ConversionComponent;