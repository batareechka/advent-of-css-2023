import '../FormField/FormField.css';
import React from 'react';
import Icon from '../Icon/Icon';

const InputPassword = ({
  id,
  isRequired = false,
  contextClassName = 'form-field__control',
}) => {
  const [value, setValue] = React.useState('');
  const [isPasswordShown, setIsPasswordShown] = React.useState(false);

  const passwordButtonLabel = isPasswordShown
    ? 'Hide password'
    : 'Show password';
  const passwordIcon = isPasswordShown ? 'eyeClosed' : 'eyeOpened';

  const toggleShowPassword = (event) => {
    if (!value) return;
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <>
      <input
        className={contextClassName}
        type={isPasswordShown ? 'text' : 'password'}
        id={id}
        required={isRequired}
        placeholder=""
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button
        className="form-field__suffix-button"
        type="button"
        aria-label={passwordButtonLabel}
        title={passwordButtonLabel}
        onClick={toggleShowPassword}
      >
        <Icon
          contextClass="form-field__suffix-icon"
          id={passwordIcon}
          size="32"
        />
      </button>
    </>
  );
};

export default InputPassword;
