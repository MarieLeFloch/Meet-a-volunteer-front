// Imports
import './style.scss';
import { useSelector } from 'react-redux';
import Experience from './Experience';

function ExperienceList() {
  const { experiences } = useSelector((state) => state.profile.profileDetails);

  // Une fois qu'on a récupéré les données d'expériences, on map dessus
  if (experiences) {
    return (
      <div className="profile__experienceList">
        {
            experiences.map((experience) => (
              <Experience
                key={experience.id}
                {...experience}
              />
            ))
          }
      </div>
    );
  }
}

export default ExperienceList;
