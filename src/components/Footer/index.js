// Imports
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
    </div>
  );
}

export default Footer;
