// == Import
import './style.scss';
import HamburgerMenu from 'react-hamburger-menu';
import { useState, useEffect } from 'react';
import NavList from './NavList';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div>
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={toggleNav}
          width={25}
          height={18}
          strokeWidth={3}
          rotate={0}
          color="#3AAFA9"
          borderRadius={1}
          animationDuration={0.5}
          className="nav__button"
        />
      </div>
      <div>
        <NavList />
      </div>
      </nav>
  );
}

export default NavBar;
