import './Link.css';

const Link = ({ href = '#', children }) => {
  return (
    <a className="link" href={href}>
      {children}
    </a>
  );
};

export default Link;
