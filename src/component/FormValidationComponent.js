import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";

class FormValidationComponent extends React.Component {

    schemaValidation = yup.object().shape({

        email: yup.string().required('Email est obligatoire').email('Email non valide'),
        password:yup.string().required("Mot de passe est obligatoire")
    });


    render() {


        return (
            <Formik initialValues={
                {
                    email: '', password: ''
                }}
               validationSchema = {this.schemaValidation}
               onSubmit={(values, { setSubmitting }) => {
                   setTimeout(() => {
                       alert(JSON.stringify(values, null, 2));
                       setSubmitting(false);
                   }, 400);
               }}

               render = {
                   ({
                        isSubmitting
                    }) => (
                       <Form>
                           <Field type="email" name="email"  />
                           <ErrorMessage name="email" component="div" />
                           <Field type="password" name="password" />
                           <ErrorMessage name="password" component="div" />
                           <button type="submit" disabled={isSubmitting}>
                               Submit
                           </button>
                       </Form>
                   )
               }
            />
        );
    }
}

export default FormValidationComponent;