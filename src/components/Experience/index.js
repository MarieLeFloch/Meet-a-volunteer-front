import Footer from '../Footer';
import PageHeader from '../Header/PageHeader';
import Experience from './ExperienceContent';
import './style.scss';
import { useSelector } from 'react-redux';

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
