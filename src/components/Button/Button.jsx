import './Button.css';

const Button = ({ type, size = 'large', isFullWidth = false, children }) => {
  const classes = isFullWidth
    ? `button button--full-width button--${size}`
    : `button button--${size}`;
  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
};

export default Button;
