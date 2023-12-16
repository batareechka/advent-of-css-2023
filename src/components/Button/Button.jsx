import './Button.css';

const Button = ({
  type,
  size = 'large',
  style,
  isFullWidth = false,
  children,
}) => {
  let classes = isFullWidth
    ? `button button--full-width button--${size}`
    : `button button--${size}`;

  classes += style ? ` button--${style}` : '';
  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
};

export default Button;
