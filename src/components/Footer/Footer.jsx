import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img
          className="footer__logo"
          src="/images/logo__secret-santa--small.svg"
          alt="Secret Santa"
          width={200}
          height={112}
        />
        <p>
          Copyright ©2023. <a href="#">Ah Ha Creative, LLC</a>. All Rights
          Reserved.
        </p>
        <a href="#">Terms & Conditions</a> <a href="#">Privacy Policy</a>{' '}
        <a href="#">Disclaimers</a>{' '}
      </div>
    </footer>
  );
};

export default Footer;
