// Imports
import './style.scss';
import ProfileIntro from './ProfileIntro';
import ExperienceList from './ExperienceList';
import PersoInfos from './PersoInfos';

function ProfileContent() {
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
