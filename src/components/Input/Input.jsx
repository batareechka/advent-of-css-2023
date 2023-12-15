import '../FormField/FormField.css';
import React from 'react';

const Input = ({
  id,
  name,
  type = 'text',
  isRequired = false,
  contextClassName = 'form-field__control',
}) => {
  const [value, setValue] = React.useState('');

  return (
    <input
      className={contextClassName}
      type={type}
      id={id}
      name={name}
      required={isRequired}
      placeholder=""
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
  );
};

export default Input;
