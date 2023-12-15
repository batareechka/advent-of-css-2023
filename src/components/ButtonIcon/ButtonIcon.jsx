import './ButtonIcon.css';
import Icon from '../Icon/Icon';

const ButtonIcon = ({ type = 'button', label, icon }) => {
  return (
    <button
      className="button-icon"
      type={type}
      aria-label={label}
      title={label}
    >
      <Icon id={icon} />
    </button>
  );
};

export default ButtonIcon;
