// == Import
import './style.scss';
import PageHeader from '../Header/PageHeader';
import AboutContent from './AboutContent';
import Footer from '../Footer';

function About() {
  return (
    <div className="container__page__all">
      <div className="container__page__others">
        <PageHeader />
        <AboutContent />
        <Footer />
      </div>
  </div>
  )
}

export default About;
