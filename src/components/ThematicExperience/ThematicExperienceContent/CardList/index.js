// Imports
import './style.scss';
import ExperienceCard from './../../../Home/HomeContent/CardList/Card';
import { useDispatch, useSelector } from 'react-redux';

function CardList() {

  const filtredExperiencesList = useSelector((state) => state.thematic.experiencesFiltredThematic)
  console.log(filtredExperiencesList);

  return (
    <div className='experience__list'>
        {filtredExperiencesList.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
    </div>

  );
}

export default CardList;
