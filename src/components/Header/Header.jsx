import './Header.css';

import DropdownMenu from '../DropdownMenu/DropdownMenu';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Header = () => {
  return (
    <header className="header">
      <HamburgerMenu />
      <div className="header__dropdown">
        <DropdownMenu />
      </div>
    </header>
  );
};

export default Header;
