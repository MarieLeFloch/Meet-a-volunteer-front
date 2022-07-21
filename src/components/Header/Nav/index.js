// == Import
import './style.scss';
import { Image } from 'semantic-ui-react';
import HamburgerMenu from 'react-hamburger-menu';
import { useState, useEffect } from 'react';
import NavList from './NavList';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav__bar">
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
      <div className="nav__list">
        <NavList isOpen={isOpen} />
      </div>
    </nav>
  );
}

export default NavBar;
