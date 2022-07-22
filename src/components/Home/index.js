// Imports
import HomeHeader from '../Header/HomeHeader';
import HomeContent from './HomeContent';
import './style.scss';

function Home() {
  return (
    <div className="home__container">
      <HomeHeader />
      <HomeContent />
    </div>
  );
}

export default Home;
