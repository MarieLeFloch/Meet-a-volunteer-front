// Imports
import './style.scss';
import { Image, Button, Icon } from 'semantic-ui-react';
import Avatar from '../../../../assets/image/user-default.png';
import { useSelector } from 'react-redux';


function ProfileIntro() {

const { pseudo, biography, profilePicture } = useSelector((state) => state.profile.profileDetails);

  return (
      <div className='profile__intro'>
          <div className='profile__intro--image'>
                <Button icon className='profile__icon profile__intro__img--icon'>
                <Icon name='edit'/>
              </Button>
              <Image src={Avatar} avatar size="small" />
          </div>
          <div className='profile__intro--pseudo'>
              <h2> {pseudo} </h2>
          </div>

          <div className='profile__intro--bio'>
          <Button icon className='profile__icon profile__intro__bio--icon'>
                <Icon name='edit'/>
          </Button>
              <p> {biography}  </p>
          </div>
      </div>
  );
}

export default ProfileIntro;
