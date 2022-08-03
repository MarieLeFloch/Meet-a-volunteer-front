// Imports
import Footer from '../Footer';
import HomeHeader from '../Header/HomeHeader';
import PageHeader from '../Header/PageHeader';
import VolunteersContent from './VolunteersContent';
import './style.scss';

function Volunteers() {
  return (
    <>
      <PageHeader />
      <HomeHeader />
      <VolunteersContent />
      <Footer />
    </>
  );
}

export default Volunteers;
