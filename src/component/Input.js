import React from "react";


const Input = (props) => {
    let {label,name,type,value,handleChange,placeholder, errorValidation } = props;

    let errorDivMessage = '';
    if (errorValidation != null) {
        errorDivMessage = (<div className="errorMsg">
            {errorValidation}
        </div>);
    }
    return (
        <div className="form-group row">
            <label htmlFor={name} className="col-sm-2 col-form-label">{label}</label>
            <div className="col-sm-10">
            <input className="form-control" id={name}
                                            name={name}
                                            type={type}
                                            value={value}
                                            onChange={handleChange}
                                            placeholder={placeholder} />
                {errorDivMessage}
            </div>
        </div>
    );
}

export default Input;