// Imports
import './style.scss';
import { Button, Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

function PersoInfos() {

  const { pseudo, firstname, lastname, age, email, password, nativeCountry } = useSelector((state) => state.profile.profileDetails);

  // Fonction pour récupérer l'age (stack over flow)
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }
  const convertAge = getAge(age);
  // console.log(convertAge);

  return (
    <div className='profile__infos'>
    <Button icon className='profile__icon profile__infos--icon'>
        <Icon name='edit'/>
      </Button>

        <h4>Personnal informations</h4>
        <ul>
            <li>Pseudo : {pseudo}</li>
            <li>Firstname : {firstname}</li>
            <li>Lastname : {lastname}</li>
            <li>Age : {convertAge} ans</li>
            <li>{email}</li>
            {/* <li>{password}</li> */}
            <li>From : {nativeCountry}</li>

        </ul>
    </div>
  );
}

export default PersoInfos;
