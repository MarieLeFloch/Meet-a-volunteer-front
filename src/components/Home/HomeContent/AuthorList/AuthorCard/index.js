// == Import
import './style.scss';
import { Image } from 'semantic-ui-react';
import Avatar from '../../../../../assets/image/user-default.png';
import { Link } from 'react-router-dom';

function AuthorCard() {
  return (
      <div className="prolific__user">
        <div className="prolific__user--item">
          <div className="prolific__user--circle">
            <Link to={`/volunteers/id/pseudo`}>
                <Image src={Avatar} avatar size="small" />
            </Link>
            <Link to={`/volunteers/id/pseudo`}>
                <span className="prolific__user--pseudo">Pseudo</span>
            </Link>
            <span classname = "prolific__user--country">Country</span>
          </div>
        </div>
      </div>
  );
}

export default AuthorCard;
