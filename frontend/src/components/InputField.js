import React from 'react';

const InputField = ({ name, label, error, ...otherProps }) => { 
    return (
        <div className="col-md-3">
        <label htmlFor={name} className="form-label custom-label">{label}</label>
        <input type="text" name={name} {...otherProps} className="form-control form-control-md" id={name} />
        </div>
    );
}


export default InputField;
