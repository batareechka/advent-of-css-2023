import './Input.css';
import React from 'react';
import Icon from '../Icon/Icon';

const Input = ({ id, type = 'text', label = 'Label', isRequired = false }) => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [value, setValue] = React.useState('');

  const classes = isInvalid ? 'form-field form-field--invalid' : 'form-field';
  return (
    <div className={classes}>
      <label
        className={`form-field__label ${
          !!value ? 'form-field__label--floating' : ''
        }`}
        for={id}
      >
        {label}
      </label>
      <input
        className="form-field__control"
        type={type}
        id={id}
        required={isRequired}
        value={value}
        pattern={type === 'email' && '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      {type === 'password' && (
        <Icon contextClass="form-field__suffix" id="eyeclosed" size="32" />
      )}
    </div>
  );
};

export default Input;
