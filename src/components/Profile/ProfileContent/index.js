// Imports
import './style.scss';
import ProfileIntro from './ProfileIntro';
import ExperienceList from './ExperienceList';
import PersoInfos from './PersoInfos';
import { fetchProfileDetails } from '../../../actions/profile';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';


function ProfileContent() {
  const dispatch = useDispatch();
  // Au chargement du composant, on récupère les infos du profile
  useEffect(() => {
    dispatch(fetchProfileDetails());
  }, []);

  // On vérifie si le profil constulé est celui de l'utilisateur connecté ou non
  // S'il s'agit de son profil perso, on affiche les boutons de modification
  const { pseudo } = useSelector((state) => state.profile.profileDetails);
  const { userPseudo } = useSelector((state) => state.user.login);
  let isOwnProfile = false;
  if (pseudo==userPseudo) {isOwnProfile=true};


  return (
    <div className="content__page__all content__page__others profile__content">
        
            <div className='profile__edit'>
            <h2 className='main__title'>Profile 
            {isOwnProfile &&
            <Link to={`/volunteers/${pseudo}/update`}>
                    <Button icon className='profile__icon profile__intro__img--icon'>
                        <Icon name='edit'/>
                    </Button>
            </Link>
            }
            </h2>
            </div>
            
      <div className="flex__topPart">
        <ProfileIntro />
      </div>
      <div className="flex__bottomPart">
        <PersoInfos />
        <ExperienceList />
      </div>
    </div>
  );
}

export default ProfileContent;
