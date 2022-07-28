// Imports
import HomeHeader from '../Header/HomeHeader';
import ThematicExperienceContent from './ThematicExperienceContent';
import Footer from './../Footer';
import './style.scss';

function ThematicExperience() {
  
  return (
    <div className="home__container">
      <HomeHeader />
      <ThematicExperienceContent />
      <Footer />
    </div>
  );
}

export default ThematicExperience;
