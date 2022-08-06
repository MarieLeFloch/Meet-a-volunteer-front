// Imports
import './style.scss';
import { Image, Button, Icon } from 'semantic-ui-react';
import Avatar from '../../../../assets/image/user-default.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeFieldValue } from '../../../../actions/profile';
import { Input } from 'semantic-ui-react';
  

function ProfileIntro() {

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
