// Imports
import Footer from '../Footer';
import PageHeader from '../Header/PageHeader';
import ProfileContent from './ProfileContent';

import './style.scss';

function Profile() {

  return (
    <div className="container__page__all">
      <div className="container__page__others">
        <PageHeader />
        <ProfileContent />
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
