import './Checkbox.css';

import React from 'react';
import Icon from '../Icon/Icon';

const Checkbox = ({ children }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const id = React.useId();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox">
      <input
        className="checkbox__control"
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <Icon contextClass="checkbox__icon" id="check" size={32} />
      <label className="checkbox__label" for={id}>
        <span className="checkbox__label-text"> {children || 'Label'}</span>
      </label>
    </div>
  );
};

export default Checkbox;
