// == Import
import './style.scss';
import { Image } from 'semantic-ui-react';
import Avatar from '../../../../assets/image/user-default.png';

function AuthorList() {
  return (
    <div>
      <h2 className="prolific__user--title">Our most prolific user</h2>
      <div className="prolific__user">
        <div className="prolific__user--item">
          <Image src={Avatar} avatar size="tiny" />
          <span>Pseudo</span>
        </div>
        <div className="prolific__user--item">
          <Image src={Avatar} avatar size="tiny" />
          <span>Pseudo</span>
        </div>
        <div className="prolific__user--item">
          <Image src={Avatar} avatar size="tiny" />
          <span>Pseudo</span>
        </div>
        <div className="prolific__user--item">
          <Image src={Avatar} avatar size="tiny" />
          <span>Pseudo</span>
        </div>

      </div>
    </div>
  );
}

export default AuthorList;
