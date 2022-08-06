// Imports
import './style.scss';
import { Image } from 'semantic-ui-react';
import { useSelector } from 'react-redux';  

function ProfileIntro() {

    // On récupère les infos du state qu'on a besoin d'afficher dans l'intro
  const { pseudo, biography, profilePicture } = useSelector((state) => state.profile.profileDetails);

  // Verif si profil personnel
  const { userPseudo } = useSelector((state) => state.user.login);
  let isOwnProfile = false;
  if (pseudo==userPseudo) {isOwnProfile=true};


  return (

      <div className='profile__intro'>
          <div className='profile__intro--image'>

              <Image src={`http://romain2518-server.eddi.cloud/images/pp/${profilePicture}`} avatar size="small" />
          </div>
          <div className='profile__intro--pseudo'>
              <h2> {pseudo} </h2>
          </div>

          <div className='profile__intro--bio'>
              <p> {biography}  </p>
          </div>
      </div>
  );
}

export default ProfileIntro;
