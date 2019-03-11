import React from "react";

const inputSelectBox = (props) => {
    let {name, onChange, options, error, touched, onBlur, value} = props;

    return (
        <React.Fragment>
            <select
                className={error && touched ? 'custom-select is-invalid' : 'custom-select'}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}>
                {options.map(option => <option key={option.value} value={option.value}>{option.text}</option>)
                }
            </select>
            {error && touched && <div className="invalid-feedback invalid">{error} </div>}
        </React.Fragment>

    )
}

export default inputSelectBox;