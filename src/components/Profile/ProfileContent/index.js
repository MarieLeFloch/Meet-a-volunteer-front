// Imports
import './style.scss';
import ProfileIntro from './ProfileIntro';
import ExperienceList from './ExperienceList';
import PersoInfos from './PersoInfos';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// const ownProfile = false;
function ProfileContent() {
  // On récupère le pseudo du profil affiché via useParams & élément dynamique renseigné dans App
  const {slug} = useParams();
  // On récupère le pseudo de l'user connecté
  const { email } = useSelector((state) => state.user.login);

  return (
    <div className='profile__content'>
      <div className='flex__topPart'>
        <ProfileIntro profileToShow={slug} />
      </div>
      <div className='flex__bottomPart'>
        <PersoInfos profileToShow={slug} />
        <ExperienceList profileToShow={slug} />
      </div>
    </div>
  );
}

export default ProfileContent;
