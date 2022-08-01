// Imports
import './style.scss';
import { Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '../../../assets/image/user-default.png';
import { isLogged } from '../../../actions/user';
import { saveIdProfile } from '../../../actions/profile';

function ProfileHeader() {
  const { pseudo, id } = useSelector((state) => state.user.login);
  console.log(id);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(isLogged());
  };
  const handleClickProfile = () => {
    dispatch(saveIdProfile(id));
  };


  return (
    <div className="home__profile">
      <Link to={`/volunteers/${pseudo}`}><Image src={Avatar} avatar size="mini" className="home__profile--avatar"  onClick={handleClickProfile}/></Link>
      <span className="home__profile--pseudo"><Link to={`/volunteers/${pseudo}`}>{pseudo}</Link> </span>
      <Button className="home__profile--button" onClick={handleClick}>Logout</Button>
    </div>
  );
}

export default ProfileHeader;
