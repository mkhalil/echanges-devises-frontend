import React from "react";

const inputNumber = (props) => {
    let {name, error, touched, value, onChange, placeholder, onBlur} = props;

    return (
        <React.Fragment>
            <input
                className={error && touched ? 'form-control is-invalid' : 'form-control'}
                name={name}
                type="number"
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                min="0"
                step="0.01"/>
            {error && touched && <div className="invalid-feedback invalid">{error} </div>}
        </React.Fragment>

    );
}

export default inputNumber;