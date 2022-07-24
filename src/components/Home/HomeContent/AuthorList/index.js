// == Import
import './style.scss';
import { Image } from 'semantic-ui-react';
import Avatar from '../../../../assets/image/user-default.png';

function AuthorList() {
  return (
    <div className="prolific__container">
      <h2 className="prolific__user--title">Our most prolific user</h2>
      <div className="prolific__user">
        <div className="prolific__user--item">
          <div className="prolific__user--circle">
            <Image src={Avatar} avatar size="tiny" />
            <span className="prolific__user--pseudo">Pseudo</span>
          </div>
        </div>
        <div className="prolific__user--item">
          <div className="prolific__user--circle">
            <Image src={Avatar} avatar size="tiny" />
            <span className="prolific__user--pseudo">Pseudo</span>
          </div>
        </div>
        <div className="prolific__user--item">
          <div className="prolific__user--circle">
            <Image src={Avatar} avatar size="tiny" />
            <span className="prolific__user--pseudo">Pseudo</span>
          </div>
        </div>
        <div className="prolific__user--item">
          <div className="prolific__user--circle">
            <Image src={Avatar} avatar size="tiny" />
            <span className="prolific__user--pseudo">Pseudo</span>
          </div>
        </div>
        <div className="prolific__user--item">
          <div className="prolific__user--circle">
            <Image src={Avatar} avatar size="tiny" />
            <span className="prolific__user--pseudo">Pseudo</span>
          </div>
        </div>
        <div className="prolific__user--item">
          <div className="prolific__user--circle">
            <Image src={Avatar} avatar size="tiny" />
            <span className="prolific__user--pseudo">Pseudo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorList;
