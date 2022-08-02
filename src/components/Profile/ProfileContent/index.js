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

  const dispatch = useDispatch();
  // Au chargement du composant, on récupère les infos du profile
  useEffect(() => {
    // console.log("chargement du profile"); //ok
    dispatch(fetchProfileDetails());
    // const { experiences } = useSelector((state) => state.profile.profileDetails);
    // console.log(experiences);
  }, []);

  // const { profileDetails } = useSelector((state) => state.profile);
  // console.log(profileDetails);

  return (
    <div className='profile__content'>
      <div className='flex__topPart'>
        <ProfileIntro />
      </div>
      <div className='flex__bottomPart'>
        <PersoInfos />
        <ExperienceList />
      </div>
    </div>
  );
}

export default ProfileContent;
