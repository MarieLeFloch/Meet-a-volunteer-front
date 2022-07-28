// Imports
import './style.scss';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// Via du destrucuring, on récupère sous forme de variable les éléments
// passés en props via le composant ThematicList
// Soit les propriétés des objets constituant la liste de thématique
function ThematicButton({ name, slugName }) {

  return (
    <li> 
      <Link to={`/experiences/thematics/${slugName}`}>
        <Button basic circular className='thematic__button'>{name}</Button>
      </Link>
    </li>
    
  );
}

export default ThematicButton;
