import './HamburgerMenu.css';

import React from 'react';
import { convertSecondsToMilliseconds } from '../../utils/utils';

const HamburgerMenu = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [isToggling, setIsToggling] = React.useState(false);
  const navigationRef = React.useRef(null);

  const classes = `hamburger-menu ${isOpened ? 'hamburger-menu--opened' : ''}`;
  const buttonLabel = isOpened ? 'Close menu' : 'Open menu';
  const buttonClasses = `hamburger-menu__button ${
    isOpened ? 'hamburger-menu__button--close' : ''
  }`;

  const handleClick = () => {
    if (isToggling) return;

    // FIXME: move to useEffect
    let duration = getComputedStyle(navigationRef.current).getPropertyValue(
      '--animation-duration'
    );

    setIsToggling(true);
    setIsOpened(!isOpened);

    setTimeout(() => {
      setIsToggling(false);
    }, convertSecondsToMilliseconds(duration));
  };

  return (
    <nav className={classes} ref={navigationRef}>
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
