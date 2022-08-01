// == Import
import './style.scss';
import { Image } from 'semantic-ui-react';
import Avatar from '../../../../../assets/image/user-default.png';
import { Link } from 'react-router-dom';
import { saveIdProfile } from '../../../../../actions/profile';
import { useDispatch, useSelector } from 'react-redux';


function AuthorCard({ pseudoSlug, pseudo, profilePicture, id }) {

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
                <Image  onClick={handleClickProfile} src={Avatar} avatar size="tiny" />
            </Link>
            <Link to={`/volunteers/${pseudoSlug}`}>
                <span  onClick={handleClickProfile} className="prolific__user--pseudo">{pseudo}</span>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default AuthorCard;
