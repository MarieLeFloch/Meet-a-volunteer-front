// Imports
import './style.scss';
import { Button, Icon } from 'semantic-ui-react';



function PersoInfos() {
  return (
    <div className='profile__infos'>
    <Button icon className='profile__icon profile__infos--icon'>
        <Icon name='edit'/>
      </Button>

        <h4>Personnal informations</h4>
        <ul>
            <li>Pseudo</li>
            <li>Firstname</li>
            <li>Lastname</li>
            <li>Age</li>
            <li>Email</li>
            <li>Password</li>
            <li>Country</li>

        </ul>
    </div>
  );
}

export default PersoInfos;
