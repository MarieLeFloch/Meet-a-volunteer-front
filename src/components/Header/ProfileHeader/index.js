// Imports
import './style.scss';
import { Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '../../../assets/image/user-default.png';
import { isLogged } from '../../../actions/user';

function ProfileHeader() {
  const { pseudo, id } = useSelector((state) => state.user.login);
  console.log(id);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(isLogged());
  };
  return (
    <div className="home__profile">
      <Image src={Avatar} avatar size="mini" className="home__profile--avatar" />
      <span className="home__profile--pseudo"><Link to={`/volunteers/${pseudo}`}>{pseudo}</Link> </span>
      <Button className="home__profile--button" onClick={handleClick}>Logout</Button>
    </div>
  );
}

export default ProfileHeader;
