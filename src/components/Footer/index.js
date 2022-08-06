// == Imports
import './style.scss';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Footer() {

  // On récupère le statut de connexion dans le state
  // Si la personne est connectée, on affiche le lien vers le back office
  const { logged } = useSelector((state) => state.user);

  return (
    <div className="footer">
      <div className='footer__logos'>
        <Button  className='footer__logo' circular icon='facebook' />
        <Button  className='footer__logo' circular icon='twitter' />
        <Button  className='footer__logo' circular icon='instagram' />
      </div>
      <div className='footer__links'>
      <Link to={`/about`}>
        <span className='footer__link'>About</span>
      </Link>
      <Link to={`/contacts`}>
        <span className='footer__link'>Contact</span>
      </Link>
      <Link to={`/legal-mentions`}>
        <span className='footer__link'>Legal mentions</span>
      </Link>

      
      { logged && <a href="http://romain2518-server.eddi.cloud/back/main">
        <span className='footer__link'>Back office</span>
      </a>}
      
      </div>
    </div>
  );
}

export default Footer;

