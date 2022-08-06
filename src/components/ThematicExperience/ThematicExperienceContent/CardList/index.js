// Imports
import './style.scss';
import { useSelector } from 'react-redux';
import ExperienceCard from '../../../Home/HomeContent/CardList/Card';

function CardList() {
  // Récupération dans le state de la liste d'expériences correspondant à la thématique cliquée
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
