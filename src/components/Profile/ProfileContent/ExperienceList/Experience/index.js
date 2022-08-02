// Imports
import './style.scss';
import { Image, Button, Icon } from 'semantic-ui-react';
import photo from '../../../../../assets/image/9.jpg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Experience( {id, title, picture,  } ) {
  // Verif si profil personnel
  const { pseudo } = useSelector((state) => state.profile.profileDetails);
  const { userPseudo } = useSelector((state) => state.user.login);
  let isOwnProfile = false;
  if (pseudo==userPseudo) {isOwnProfile=true};
  
  return (
    <div className='profile__experience'>
        <div className='profile__experience--image'>
            <Image src={photo} size="medium" />
        </div>
        <div className='profile__experience--text'>
            <h3>{title}</h3>
            <p>Lemon drops biscuit jelly beans croissant dessert tart tiramisu. Soufflé bear claw fruitcake cheesecake biscuit sweet candy. Biscuit chocolate bar pudding marshmallow brownie powder cupcake dragée. Jelly muffin chocolate cake fruitcake cookie sweet roll toffee brownie. Lemon drops biscuit jelly beans croissant dessert tart tiramisu. Soufflé bear claw fruitcake cheesecake biscuit sweet candy. Biscuit chocolate bar pudding marshmallow brownie powder cupcake dragée. Jelly muffin chocolate cake fruitcake cookie sweet roll toffee brownie.</p>
            <div><a>read more</a></div>
        </div>
      {isOwnProfile &&       
      <Link to={`/experiences/${id}/update`}>
        <Button icon className='profile__icon profile__experience--icon'>
          <Icon name='edit'/>
        </Button>
      </Link>
      }
    </div>
  );
}

export default Experience;
