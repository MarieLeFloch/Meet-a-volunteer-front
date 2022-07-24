// == Import
import './style.scss';
import HamburgerMenu from 'react-hamburger-menu';
import { useState } from 'react';
import NavList from './NavList';
import Logo from '../../../assets/image/logo.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(true);

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
      <div>
        <img src={Logo} alt="" className="nav__logo" />
      </div>
      <div className="nav__list">
        <NavList isOpen={isOpen} />
      </div>
    </nav>
  );
}

export default NavBar;
