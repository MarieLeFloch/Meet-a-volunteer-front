// == Imports
import './style.scss';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Footer() {
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
      </div>
    </div>
  );
}

export default Footer;
