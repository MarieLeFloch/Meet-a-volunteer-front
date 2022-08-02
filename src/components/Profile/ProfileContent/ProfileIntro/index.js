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

  const handleImageChange = (event) => {
    // const output = document.getElementById('output');
    // output.src = URL.createObjectURL(event.target.files[0]);
    dispatch(changeFieldValue((event.target.files[0]), 'image'));
  };


  return (
      <div className='profile__intro'>
          <div className='profile__intro--image'>
          <Input onChange={handleImageChange} type="file" label="Select an image" accept="image/png" className="experience__form--main__input" />

          {isOwnProfile &&
            <Link to={`/volunteers/${pseudo}/update`}>
                <Input onChange={handleImageChange} type="file" label="Select an image" accept="image/png" className="experience__form--main__input" >
                    <Button icon className='profile__icon profile__intro__img--icon'>
                        <Icon name='edit'/>
                    </Button>
                </Input>
            </Link>
          }

              <Image src={Avatar} avatar size="small" />
          </div>
          <div className='profile__intro--pseudo'>
              <h2> {pseudo} </h2>
          </div>

          <div className='profile__intro--bio'>
          {isOwnProfile &&  
            <Link to={`/volunteers/${pseudo}/update`}>       
                <Button icon className='profile__icon profile__intro__bio--icon'>
                    <Icon name='edit'/>
                </Button>
            </Link>
            }
              <p> {biography}  </p>
          </div>
      </div>
  );
}

export default ProfileIntro;
