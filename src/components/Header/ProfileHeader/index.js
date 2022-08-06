// Imports
import './style.scss';
import { Image, Button } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLogged } from '../../../actions/user';
import { fetchProfileDetails, saveIdProfile } from '../../../actions/profile';

function ProfileHeader() {
  // Récupération du pseudo et de l'id du profile
  const { userPseudo, id, profileUserPicture } = useSelector((state) => state.user.login);
  const navigate = useNavigate();
  console.log(id);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(isLogged());
    navigate('/');
  };
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
