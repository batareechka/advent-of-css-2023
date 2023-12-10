import './HamburgerMenu.css';

import React from 'react';
import debounce from 'lodash.debounce';

const HamburgerMenu = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [isToggling, setIsToggling] = React.useState(false);

  const classes = isOpened
    ? 'hamburger-menu hamburger-menu--opened'
    : 'hamburger-menu';
  const buttonLabel = isOpened ? 'Close menu' : 'Open menu';
  const buttonClasses = isOpened
    ? 'hamburger-menu__button hamburger-menu__button--close'
    : 'hamburger-menu__button';

  const handleClick = () => {
    if (isToggling) return;

    setIsToggling(true);
    setIsOpened(!isOpened);

    setTimeout(() => {
      setIsToggling(false);
    }, 600); // 600ms is the duration of the animation
  };

  return (
    <nav className={classes}>
      <button
        className={buttonClasses}
        type="button"
        aria-label={buttonLabel}
        aria-expanded={isOpened}
        aria-controls="navigation-list" /* for JAWS */
        onClick={handleClick}
      >
        <span className="hamburger-menu__button-line"></span>
      </button>
      {/* FIXME inert={!isOpened} 
          WARNING: Received `false` for a non-boolean attribute `inert`
          https://github.com/facebook/react/pull/24730
      */}
      <div className="hamburger-menu__panel" inert={!isOpened && 'inert'}>
        <div className="hamburger-menu__list" id="navigation-list">
          <a className="hamburger-menu__link" href="#">
            Dashboard
          </a>
          <a className="hamburger-menu__link" href="#">
            Our group
          </a>
          <a className="hamburger-menu__link" href="#">
            My wishlist
          </a>
        </div>
        <section className="hamburger-menu__events">
          <h2 className="hamburger-menu__events-header">Past events</h2>
          <h3 className="hamburger-menu__events-title ">Balthis Christmas</h3>
          <p>December 23, 2023</p>
        </section>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
