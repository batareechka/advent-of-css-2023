import './DropdownMenu.css';

import React from 'react';

import Avatar from '../Avatar/Avatar';
import Icon from '../Icon/Icon';

const menuItems = [
  {
    id: 'user',
    label: 'My account',
    icon: 'user',
  },

  {
    id: 'calendar',
    label: 'My event',
    icon: 'calendar',
  },
  {
    id: 'logout',
    label: 'Logout',
    icon: 'logout',
  },
];

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="dropdown-menu">
      <button
        className="dropdown-menu__button"
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon id="chevron" />
        <Avatar alt="Cody Fisher" avatar="avatar-05.png" />
        <span className="dropdown-menu__button-label">
          <span className="dropdown-menu__button-text">Logged in as</span>
          <span className="dropdown-menu__button-name">Cody Fisher</span>
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu__list">
          {menuItems.map(({ id, label, icon }) => (
            <li key={id} className="dropdown-menu__item">
              <a className="dropdown-menu__link" href="">
                <Icon
                  contextClass="dropdown-menu__link-icon"
                  id={icon}
                  size={32}
                />{' '}
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
