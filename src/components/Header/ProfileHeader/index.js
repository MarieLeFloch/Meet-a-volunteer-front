// Imports
import './style.scss';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Avatar from '../../../assets/image/user-default.png';

function ProfileHeader() {
  const { pseudo, id } = useSelector((state) => state.user.login);
  console.log(id)
  return (
    <div className="home__profile">
      <Image src={Avatar} avatar size="mini" className="home__profile--avatar" />
      <span className="home__profile--pseudo"><Link to={`/volunteers/${pseudo}`}>{pseudo}</Link> </span>
    </div>
  );
}

export default ProfileHeader;
