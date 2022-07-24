// Imports
import HomeHeader from '../Header/HomeHeader';
import HomeContent from './HomeContent';
import Footer from './../Footer';
import './style.scss';

function Home() {
  return (
    <div className="home__container">
      <HomeHeader />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default Home;
