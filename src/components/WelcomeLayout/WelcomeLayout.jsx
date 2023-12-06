import './WelcomeLayout.css';
import Logo from '../Logo/Logo';

const WelcomeLayout = ({ children }) => {
  return (
    <main class="welcome-layout">
      <div className="welcome-layout__inner">
        <div className="welcome-layout__content">
          <Logo />
          {children}
        </div>
      </div>
    </main>
  );
};

export default WelcomeLayout;
