import './ButtonIcon.css';
import Icon from '../Icon/Icon';

const ButtonIcon = ({ label, icon }) => {
  return (
    <button
      className="button-icon"
      type="button"
      aria-label={label}
      title={label}
    >
      <Icon id={icon} />
    </button>
  );
};

export default ButtonIcon;
