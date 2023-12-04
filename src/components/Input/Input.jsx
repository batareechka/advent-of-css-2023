import './Input.css';
import React from 'react';
import Icon from '../Icon/Icon';

const Input = ({ id, type = 'text', label = 'Label', isRequired = false }) => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <div className="form-field">
      <label className="form-field__label" for={id}>
        {label}
      </label>
      <input
        className="form-field__control"
        type={type}
        id={id}
        required={isRequired}
        placeholder=""
        value={value}
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
