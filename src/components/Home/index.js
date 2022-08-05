// Imports
import HomeHeader from '../Header/HomeHeader';
import HomeContent from './HomeContent';
import Footer from './../Footer';
import './style.scss';

function Home() {
  return (
    <div className="container__page__all">
      <div className="container__page__home">
        <HomeHeader />
        <HomeContent />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
