// Imports
import './style.scss';
import { Image, Button, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import photo from '../../../../../assets/image/9.jpg';
import { saveExperienceId } from '../../../../../actions/experience';

function Experience({ id, title, picture, slugTitle }) {
  // Verif si profil personnel
  const { pseudo } = useSelector((state) => state.profile.profileDetails);
  const { userPseudo } = useSelector((state) => state.user.login);
  let isOwnProfile = false;
  if (pseudo == userPseudo) {
    isOwnProfile = true;
  }
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(saveExperienceId(id));
  }

  return (
    <div className="profile__experience">
      <div className="profile__experience--image">
        <Image src={`http://romain2518-server.eddi.cloud/images/experiencePicture/${picture}`} size="medium" />
      </div>
      <div className="profile__experience--text">
        <h3>{title}</h3>
        <p>Lemon drops biscuit jelly beans croissant dessert tart tiramisu. Soufflé bear claw fruitcake cheesecake biscuit sweet candy. Biscuit chocolate bar pudding marshmallow brownie powder cupcake dragée. Jelly muffin chocolate cake fruitcake cookie sweet roll toffee brownie. Lemon drops biscuit jelly beans croissant dessert tart tiramisu. Soufflé bear claw fruitcake cheesecake biscuit sweet candy. Biscuit chocolate bar pudding marshmallow brownie powder cupcake dragée. Jelly muffin chocolate cake fruitcake cookie sweet roll toffee brownie.</p>
        <div><Link onClick={handleClick} to={`/experiences/${id}/${slugTitle}`}>Read More</Link></div>
      </div>
      {isOwnProfile
      && (
      <Link to={`/experiences/${id}/update`}>
        <Button icon className="profile__icon profile__experience--icon">
          <Icon name="edit" />
        </Button>
      </Link>
      )}
    </div>
  );
}

export default Experience;
