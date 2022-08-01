// Imports
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import ExperienceCard from '../../../Home/HomeContent/CardList/Card';

function CardList() {
  const filtredExperiencesList = useSelector((state) => state.thematic.experiencesFiltredThematic);

  return (
    <div className="experience__list">
      {filtredExperiencesList.map((experience) => (
        <ExperienceCard key={experience.id} {...experience} />
      ))}
    </div>

  );
}

export default CardList;
