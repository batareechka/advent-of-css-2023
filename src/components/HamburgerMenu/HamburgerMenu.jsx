import './HamburgerMenu.css';

import React from 'react';

const HamburgerMenu = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const buttonLabel = isOpened ? 'Close menu' : 'Open menu';
  const classes = isOpened
    ? 'hamburger-menu hamburger-menu--opened'
    : 'hamburger-menu';
  const buttonClasses = isOpened
    ? 'hamburger-menu__button hamburger-menu__button--close'
    : 'hamburger-menu__button';
  return (
    <div className={classes}>
      <button
        className={buttonClasses}
        type="button"
        aria-label={buttonLabel}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <span className="hamburger-menu__button-line"></span>
      </button>
      {/* FIXME inert={!isOpened} 
          https://github.com/facebook/react/pull/24730
      */}
      <div className="hamburger-menu__panel" inert={!isOpened && ''}>
        <nav className="hamburger-menu__navigation">
          <a className="hamburger-menu__link" href="#">
            Dashboard
          </a>
          <a className="hamburger-menu__link" href="#">
            Our group
          </a>
          <a className="hamburger-menu__link" href="#">
            My wishlist
          </a>
        </nav>
        <section className="hamburger-menu__events">
          <h2 className="hamburger-menu__events-header">Past events</h2>
          <h3 className="hamburger-menu__events-title ">Balthis Christmas</h3>
          <p>December 23, 2023</p>
        </section>
      </div>
    </div>
  );
};

export default HamburgerMenu;
