// Imports
import Footer from '../Footer';
import PageHeader from '../Header/PageHeader';
import ProfileUpdateForm from './ProfileUpdateForm';

import './style.scss';

function ProfileUpdate() {
  return (
    <div className="container__page__all">
      <div className="container__page__others">
        <PageHeader />
        <ProfileUpdateForm />
        <Footer />
      </div>
    </div>
  );
}

export default ProfileUpdate;
