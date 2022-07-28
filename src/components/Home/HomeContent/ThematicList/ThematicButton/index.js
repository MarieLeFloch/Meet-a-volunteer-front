// Imports
import './style.scss';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filtredThematic } from '../../../../../actions/thematic';

// Via du destrucuring, on récupère sous forme de variable les éléments
// passés en props via le composant ThematicList
// Soit les propriétés des objets constituant la liste de thématique
function ThematicButton({ id, name, slugName }) {

  // const currentFiltredThematic = useSelector((state) => state.thematic.filtredThematic);

  const dispatch = useDispatch();

  const updateFiltredThematic = () => {
    dispatch(filtredThematic(id, name));
  }
  return (
    <li> 
      <Link to={`/experiences/thematics/${slugName}`}>
        <Button 
          onClick={updateFiltredThematic}
          basic circular 
          className='thematic__button'>{name}
        </Button>
      </Link>
    </li>
    
  );
}

export default ThematicButton;
