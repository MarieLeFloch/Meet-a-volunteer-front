// == Import
import './style.scss';
import HamburgerMenu from 'react-hamburger-menu';
import NavList from './NavList';
import Logo from '../../../assets/image/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
  // Gestion de la barre de nav à optimiser avec le responsive
  // Ouverture / fermeture du menu au click
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
        <Link to="/"><img src={Logo} alt="" className="nav__logo" /></Link>
      </div>
      <div className="nav__list">
        <NavList isOpen={isOpen} />
      </div>
    </nav>
  );
}

export default NavBar;
