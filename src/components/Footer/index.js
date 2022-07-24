// == Imports
import './style.scss';
import { Button } from 'semantic-ui-react';

function Footer() {
  return (
    <div className="footer">
      <div className='footer__logos'>
        <Button  className='footer__logo' circular icon='facebook' />
        <Button  className='footer__logo' circular icon='twitter' />
        <Button  className='footer__logo' circular icon='instagram' />
      </div>
      <div className='footer__links'>
        <a className='footer__link'>About</a>
        <a className='footer__link'>Contact</a>
        <a className='footer__link'>Legal mentions</a>
      </div>
    </div>
  );
}

export default Footer;
