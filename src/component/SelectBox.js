import React from "react";

const selectBox = (props) => {
    let {name, handleChange, options, validateMessage, validateField, required} = props;

    let errorDivMessage = '';
    let className = 'custom-select';
    if (validateField === false) {
        errorDivMessage = (<div className="invalid-feedback">
            {validateMessage}
        </div>);
        className = className + ' is-invalid';
    }
    return (
        <React.Fragment>
            <select className={className} onChange={handleChange} id={name} name={name} required={required}>
                {options.map(option => <option key={option.id} value={option.id}>{option.value}</option>)}
            </select>
            {errorDivMessage}
        </React.Fragment>
    )
}

export default selectBox;