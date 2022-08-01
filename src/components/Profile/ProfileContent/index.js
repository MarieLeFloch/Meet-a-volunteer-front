// Imports
import './style.scss';
import ProfileIntro from './ProfileIntro';
import ExperienceList from './ExperienceList';
import PersoInfos from './PersoInfos';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProfileDetails } from '../../../actions/profile';

function ProfileContent() {
  // On récupère le pseudo du profil affiché via useParams & élément dynamique renseigné dans App
  const {slug} = useParams();
  // On récupère le pseudo de l'user connecté
  const { email } = useSelector((state) => state.user.login);

  const dispatch = useDispatch();
  // Au chargement du composant, on récupère les infos du profile
  useEffect(() => {
    // console.log("chargement du profile"); //ok
    dispatch(fetchProfileDetails())
  }, []);

  // const { profileDetails } = useSelector((state) => state.profile);
  // console.log(profileDetails);

  return (
    <div className='profile__content'>
      <div className='flex__topPart'>
        <ProfileIntro profileToShow={slug} />
      </div>
      <div className='flex__bottomPart'>
        <PersoInfos profileToShow={slug} />
        <ExperienceList profileToShow={slug}  />
      </div>
    </div>
  );
}

export default ProfileContent;
