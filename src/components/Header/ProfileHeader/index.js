// Imports
import './style.scss';
import { Image, Button } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLogged } from '../../../actions/user';
import { fetchProfileDetails, saveIdProfile } from '../../../actions/profile';

// Encart de profile qui remplace les boutons de connexion/inscription une fois la personne loggée
function ProfileHeader() {
  // Récupération du pseudo et de l'id du profile
  const { userPseudo, id, profileUserPicture } = useSelector((state) => state.user.login);

  // Récupération de la méthode useNavigate pour rediriger au click
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Au click, on enregistre le nouveau statut de connexion
  // Lorsque l'utilisateur se déconnecte, on le redirige vers la home
  const handleClick = () => {
    dispatch(isLogged());
    navigate('/');
  };

  // Au click sur l'image ou le pseudo, on enregistre les infos du profile
  // de la même façon qu'au click sur d'autres profils de volontaire
  // on charge ainsi les infos au moment de rediriger sur la page de profile
  const handleClickProfile = () => {
    dispatch(saveIdProfile(id));
    dispatch(fetchProfileDetails());
  };

  return (
    <div className="home__profile">
      <Link to={`/volunteers/${userPseudo}`}><Image src={`http://romain2518-server.eddi.cloud/images/pp/${profileUserPicture}`} avatar size="mini" className="home__profile--avatar" onClick={handleClickProfile} /></Link>
      <Link onClick={handleClickProfile} to={`/volunteers/${userPseudo}`}><span className="home__profile--pseudo">{userPseudo}</span></Link> 
      <Button className="home__profile--button" onClick={handleClick}>Logout</Button>
    </div>
  );
}

export default ProfileHeader;
