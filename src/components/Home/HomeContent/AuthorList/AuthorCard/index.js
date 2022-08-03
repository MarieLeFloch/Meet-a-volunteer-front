// == Import
import './style.scss';
import { Image } from 'semantic-ui-react';
import Avatar from '../../../../../assets/image/user-default.png';
import { Link } from 'react-router-dom';
import { saveIdProfile } from '../../../../../actions/profile';
import { useDispatch, useSelector } from 'react-redux';


function AuthorCard({ pseudoSlug, pseudo, profilePicture, id, nativeCountry, expCounter }) {

  const dispatch = useDispatch();

  const handleClickProfile = () => {
    console.log(id);
    dispatch(saveIdProfile(id));
  };

  return (
      <div className="prolific__user">
        <div className="prolific__user--item">
          <div className="prolific__user--circle">
            <Link to={`/volunteers/${pseudoSlug}`}>
                <Image  onClick={handleClickProfile} src={`http://romain2518-server.eddi.cloud/images/pp/${profilePicture}`} avatar size="tiny" />
            </Link>
            <Link to={`/volunteers/${pseudoSlug}`}>
                <span  onClick={handleClickProfile} className="prolific__user--pseudo">{pseudo}</span>
            </Link>
            <span className = "prolific__user--country">From {nativeCountry}</span>
            {(expCounter) && <span className = "prolific__user--nbExp">{expCounter} experiences shared</span>}
          </div>
        </div>
      </div>
  );
}

export default AuthorCard;
