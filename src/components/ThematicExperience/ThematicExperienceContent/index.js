// Imports
import './style.scss';
import CardList from './CardList';
import ThematicList from './../../Home/HomeContent/ThematicList';
import { useDispatch, useSelector } from 'react-redux';


function ThematicExperienceContent() {
  // Récupération de la valeur dans le state correspondant au nom de la thématique cliquée
  const currentFiltredThematic = useSelector((state) => state.thematic.filtredThematicName)
  return (
    <div className='experiences__content'>
        <h1 className="experiences__content--title">Volunteer's feedbacks</h1>
        <h2 className="experiences__content--subtitle">{currentFiltredThematic}</h2>
        <ThematicList />
        <CardList />
    </div>

  );
}

export default ThematicExperienceContent;
