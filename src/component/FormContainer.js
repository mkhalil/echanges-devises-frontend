import React from "react";
import Input from "./Input";
import validator from "validator";

class FormContainer extends React.Component {



    handleChangeInput = (e) => {
        const {name, value} = e.target;
        const index = this.forms.findIndex(f => f.name === name);
        const form = this.forms[index];
        if (!form.validatorRules(value)) {
            form.validationError = form.errorMessage;
            this.setState({errors: true});
        } else {
            form.validationError = null;
            this.setState({errors: false});
        }
    }

    forms = [

        {
            name: 'nom',
            type: 'text',
            label: 'Nom',
            placeholder: 'nom',
            handleChange: this.handleChangeInput,
            errorMessage: 'Taille de champ doit être superieur à 4',
            validatorRules: (msg) => !validator.isEmpty(msg) && msg.length > 4,
            validationError: null
        },
        {
            name: 'prenom',
            type: 'text',
            label: 'Prenom',
            placeholder: 'prenom',
            handleChange: this.handleChangeInput,
            errorMessage: 'Taille de champ doit être superieur à 4',
            validatorRules: (msg) => !validator.isEmpty(msg) && msg.length > 4,
            validationError: null
        },

        {
            name: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'Email',
            handleChange: this.handleChangeInput,
            errorMessage: 'Email non valide',
            validatorRules: (msg) => validator.isEmail(msg),
            validationError: null

        }
    ];


    constructor() {

        super();

    }

    inputElement = (props) => {
        const {name, type, label, placeholder, handleChange, validationError} = props;
        return (
            <Input type={type} label={label} name={name} placeholder={placeholder}
                   handleChange={handleChange}
                   errorValidation={validationError}/>
        );
    }


    render() {
        const formInputs = this.forms.map(form => this.inputElement(form));
        return (
            <form>
                {formInputs}
            </form>
        );
    }

}

export default FormContainer;