// Imports
import './style.scss';
import { useSelector } from 'react-redux';

function PersoInfos() {
  // Recuperation des personnal informations dans le state
  const { pseudo, firstname, lastname, age, email, nativeCountry } = useSelector((state) => state.profile.profileDetails);

  // Verif si profil personnel
  const { userPseudo } = useSelector((state) => state.user.login);
  let isOwnProfile = false;
  if (pseudo==userPseudo) {isOwnProfile=true};

  // Fonction pour récupérer l'age à partir de la date (stack over flow)
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

  // Quand il ne s'agit pas du profil de l'utilisateur connecté, on n'affiche que certaines infos
  return (
    <div className='profile__infos'>

        <h4>Personnal informations</h4>
        <ul>
            <li>Pseudo : {pseudo}</li>
            <li>Firstname : {firstname}</li>
            {isOwnProfile &&  <li>Lastname : {lastname}</li>}
            <li>Age : {convertAge} ans</li>
            {isOwnProfile && <li>{email}</li>}
            <li>From : {nativeCountry}</li>

        </ul>
    </div>
  );
}

export default PersoInfos;
