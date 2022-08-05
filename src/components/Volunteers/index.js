// Imports
import Footer from '../Footer';
import HomeHeader from '../Header/HomeHeader';
import PageHeader from '../Header/PageHeader';
import VolunteersContent from './VolunteersContent';
import './style.scss';

function Volunteers() {
  return (
    <div className="container__page__all">
      <div className="container__page__home">      
        <HomeHeader />
        <VolunteersContent />
        <Footer />
      </div>
    </div>
  );
}

export default Volunteers;
