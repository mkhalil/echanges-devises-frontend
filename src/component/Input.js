import React from "react";


const Input = (props) => {
    let {name,type,value,handleChange,placeholder, validateMessage , validateField, required } = props;

    let errorDivMessage = '';
    let className = 'form-control';
    if (validateField === false) {
        errorDivMessage = (<div className="invalid-feedback">
            {validateMessage}
        </div>);
        className = className + ' is-invalid';
    }
    let inputElement = <input className={className} id={name}
                              name={name}
                              type={type}
                              value={value}
                              onChange={handleChange}
                              placeholder={placeholder}
                              required={required}
    />;
    if (type === 'number') {
        inputElement = <input className={className} id={name}
                              name={name}
                              type={type}
                              value={value}
                              onChange={handleChange}
                              placeholder={placeholder}
                              required={required}
                              step="0.01"
                              min="0"
        />
    }
    return (

        <React.Fragment>
            {inputElement}
            {errorDivMessage}
        </React.Fragment>
    );
}

export default Input;