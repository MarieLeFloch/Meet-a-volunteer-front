// Imports
import './style.scss';
import Footer from '../Footer';
import PageHeader from '../Header/PageHeader';
import Experience from './ExperienceContent';

// Composant de la page d'expérience detaillée
function ExperiencePage() {
  return (
    <div className="container__page__all">
      <div className="container__page__others">
        <PageHeader />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

export default ExperiencePage;
