// Imports
import './style.scss';
import { Card } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import ExperienceCard from './Card';

function CardList() {
  const randomExperiencesList = useSelector((state) => state.experiences.homeExperiences);
  // console.log(randomExperiencesList);

  return (
    <div className="experience__list">
      {randomExperiencesList.map((experience) => (
        <ExperienceCard key={experience.id} {...experience} />
      ))}
    </div>
  );
}

export default CardList;
