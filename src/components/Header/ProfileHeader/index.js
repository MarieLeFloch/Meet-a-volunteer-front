// Imports
import './style.scss';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/image/user-default.png';

function ProfileHeader() {
  return (
    <div className="home__profile">
      <Image src={Avatar} avatar size="mini" className="home__profile--avatar" />
      <span className="home__profile--pseudo"><Link to="/experience">Pseudo</Link> </span>
    </div>
  );
}

export default ProfileHeader;
