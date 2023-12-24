import './ButtonIcon.css';
import Icon from '../Icon/Icon';

const ButtonIcon = ({ type = 'button', label, icon, style }) => {
  const classes = style ? `button-icon button-icon--${style}` : 'button-icon';
  return (
    <button className={classes} type={type} aria-label={label} title={label}>
      <Icon id={icon} />
    </button>
  );
};

export default ButtonIcon;
