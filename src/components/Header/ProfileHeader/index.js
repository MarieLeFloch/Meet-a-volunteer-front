// Imports
import './style.scss';
import { Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '../../../assets/image/user-default.png';
import { isLogged } from '../../../actions/user';
import { saveIdProfile } from '../../../actions/profile';

function ProfileHeader() {
  // Récupération du pseudo et de l'id du profile
  const { userPseudo, id } = useSelector((state) => state.user.login);
  console.log(id);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(isLogged());
  };
  const handleClickProfile = () => {
    dispatch(saveIdProfile(id));
  };

  // Récupération de la photo de profil
  const { profilePicture } = useSelector((state) => state.profile.profileDetails);

  return (
    <div className="home__profile">
      <Link to={`/volunteers/${userPseudo}`}><Image src={`http://romain2518-server.eddi.cloud/images/pp/${profilePicture}`}  avatar size="mini" className="home__profile--avatar"  onClick={handleClickProfile}/></Link>
      <span className="home__profile--pseudo"><Link to={`/volunteers/${userPseudo}`}>{userPseudo}</Link> </span>
      <Button className="home__profile--button" onClick={handleClick}>Logout</Button>
    </div>
  );
}

export default ProfileHeader;
