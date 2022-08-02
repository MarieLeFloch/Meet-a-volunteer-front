// Imports
import './style.scss';
import { Button, Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function PersoInfos() {
  // Recuperation des personnal informations dans le state
  const { pseudo, firstname, lastname, age, email, password, nativeCountry } = useSelector((state) => state.profile.profileDetails);

  // Verif si profil personnel
  // On récupère le pseudo de l'user connecté
  const { userPseudo } = useSelector((state) => state.user.login);
  // console.log(userPseudo);
  let isOwnProfile = false;
  if (pseudo==userPseudo) {isOwnProfile=true};
  // console.log('is own profile : ', isOwnProfile);

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

    {isOwnProfile &&       
    <Link to={`/volunteers/${pseudo}/update`}>       
      <Button icon className='profile__icon profile__infos--icon'>
        <Icon name='edit'/>
      </Button>
    </Link>
    }
        <h4>Personnal informations</h4>
        <ul>
            <li>Pseudo : {pseudo}</li>
            <li>Firstname : {firstname}</li>
            {isOwnProfile &&  <li>Lastname : {lastname}</li>}
            <li>Age : {convertAge} ans</li>
            {isOwnProfile && <li>{email}</li>}
            {/* <li>{password}</li> */}
            <li>From : {nativeCountry}</li>

        </ul>
    </div>
  );
}

export default PersoInfos;
