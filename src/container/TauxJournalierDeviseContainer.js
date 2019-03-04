import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Input from "../component/Input";
import Api from "../utiles/Api";
import validator from "validator";
import SelectBox from "../component/SelectBox";
import {NotificationManager} from "react-notifications";
import TauxJournalierDeviseTableComponent from "../component/TauxJournalierDeviseTableComponent";

class TauxJournalierDeviseContainer extends React.Component {


    submitForm = (event) => {
        event.preventDefault();
        let validateFields = this.state.validateFields;
        let validateForm = Object.values(validateFields).findIndex(v => v === false) === -1;
        console.log("validateForm", validateForm);

        if (validateForm) {
            const {dateTaux, montantAchat, montantVente, deviseId} = this.state;
            let tauxJournalierDevise = {
                dateTaux: dateTaux,
                montantAchat: montantAchat,
                montantVente: montantVente,
                deviseId: deviseId
            }


            Api.post("/taux-echanges-devises", tauxJournalierDevise).then(v => {
                NotificationManager.success('Enregistrement avec succès', 'Taux journalière');
                this.reloadTable = true;
            }).catch(error => {
                console.log("error", error.response.data);
                NotificationManager.error(error.response.data.message, 'Error d\'enregistrement', 5000);
            });

        }

    }

    reloadTable = true;


    state = {
        dateTaux: new Date(),
        montantAchat: '',
        montantVente: '',
        deviseId: '',
        validateFields: {
            montantAchat: null,
            montantVente: null,
            deviseId: null
        },
        alertFeedBack: {
            type: null,
            message: null
        }
    };

    positive = (v) => {
        let floatV = validator.toFloat(v);
        return floatV > 0;
    }

    isNotEmpty = (v) => {
        return !validator.isEmpty(v);
    }


    constructor(props) {
        super(props);
    }

    setStateValidationFields = (name, value) => {
        let validateFields = {...this.state.validateFields};
        validateFields[name] = value;
        this.setState({validateFields: validateFields});
    }


    handleChangeInput = (event, testFunction) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
        let result = testFunction(value);
        this.setStateValidationFields(name, result);
    }

    handleChange = (date) => {
        this.setState({
            dateTaux: date
        });
    }

    devises = [
        {text: 'Devise', value: ''},
        {text: 'Euro', value: 1},
        {text: 'Dollar', value: 2},

    ]


    render() {

        return (
            <React.Fragment>
                <form onSubmit={(event) => this.submitForm(event)}>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label htmlFor="dateTaux">Date d'échange</label>
                            <DatePicker selected={this.state.dateTaux} dateFormat="dd/MM/YYYY" className="form-control"
                                        id="dateTaux"
                                        onChange={(date) => this.handleChange(date)}/>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="deviseId">Devise</label>
                            <SelectBox name="deviseId" options={this.devises}
                                       required={true}
                                       validateMessage="Choisisez la devise d'échange"
                                       validateField={this.state.validateFields.deviseId}
                                       handleChange={(event) => this.handleChangeInput(event, this.isNotEmpty)}/>
                        </div>

                        <div className="form-group col-md-2">
                            <label htmlFor="montantAchat">Montant d'achat</label>
                            <Input name="montantAchat" type="number" placeholder="Montant d'achat"
                                   value={this.state.montantAchat}
                                   required={true}
                                   validateMessage="Montant d'achat doit être > 0"
                                   validateField={this.state.validateFields.montantAchat}
                                   handleChange={(event) => this.handleChangeInput(event, this.positive)}/>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="montantVente">Montant du vente</label>
                            <Input name="montantVente" type="number" placeholder="Montant du vente"
                                   value={this.state.montantVente}
                                   required={true}
                                   validateMessage="Montant du vente doit être > 0"
                                   validateField={this.state.validateFields.montantVente}
                                   handleChange={(event) => this.handleChangeInput(event, this.positive)}/>
                        </div>
                        <div className="form-group col-md-4">
                            <button type="submit" id="enregistrer" className="btn btn-primary marginTop32px">Enregistrer
                            </button>
                        </div>
                    </div>
                </form>
                <TauxJournalierDeviseTableComponent />
            </React.Fragment>

        );

    }

}

export default TauxJournalierDeviseContainer;