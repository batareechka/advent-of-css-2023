import './FormField.css';
import React from 'react';
import Input from '../Input/Input';
import InputPassword from '../InputPassword/InputPassword';

const FormField = ({ id, type = 'text', label = 'Label', children }) => {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        {label}
      </label>

      {children}

      {/* TODO: revise architecture */}
      {/* {(type === 'text' || type === 'email') && (
        <Input contextClassName="form-field__control" type={type} />
      )}

      {type === 'password' && (
        <InputPassword contextClassName="form-field__control" />
      )} */}
    </div>
  );
};

export default FormField;
