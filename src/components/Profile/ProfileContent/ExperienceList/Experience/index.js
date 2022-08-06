// Imports
import './style.scss';
import { Image, Button, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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

  // feedback n'est pas disponible dans cette requête
  // On met directement une redirection vers l'expérience detaillée

  return (
    <div className="profile__experience">
      <div className="profile__experience--image">
        <Image src={`http://romain2518-server.eddi.cloud/images/experiencePicture/${picture}`} size="medium" />
      </div>
      <div className="profile__experience--text">
        <h3>{title}</h3>
        <Link onClick={handleClick} to={`/experiences/${id}/${slugTitle}`}><Button className='button'>See more</Button></Link>
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
