// Imports
import HomeHeader from '../Header/HomeHeader';
import ThematicExperienceContent from './ThematicExperienceContent';
import Footer from './../Footer';
import './style.scss';

function ThematicExperience() {
  
  return (
    <div className="container__page__all">
      <div className="container__page__home">
        <HomeHeader />
        <ThematicExperienceContent />
        <Footer />
      </div>
    </div>
  );
}

export default ThematicExperience;
