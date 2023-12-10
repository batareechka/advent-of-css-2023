import './InteriorLayout.css';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';

const InteriorLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="interior-layout">
        <div className="interior-layout__inner">
          <div className="interior-layout__side">
            <div className="interior-layout__logo">
              <Logo />
            </div>
          </div>
          <div className="interior-layout__content">{children}</div>
        </div>
      </main>
    </>
  );
};

export default InteriorLayout;
