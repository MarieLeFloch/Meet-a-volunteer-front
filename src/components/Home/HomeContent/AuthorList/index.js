// == Import
import './style.scss';
import AuthorCard from './AuthorCard';

function AuthorList() {
  return (
    <div className="prolific__container">
      <h2 className="prolific__user--title">Our most prolific user</h2>
      <div className='prolific__user__container'>
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
      </div>
    </div>
  );
}

export default AuthorList;
