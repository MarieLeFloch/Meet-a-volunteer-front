import Footer from '../Footer';
import PageHeader from '../Header/PageHeader';
import Experience from './ExperienceContent';
import './style.scss';
import { useSelector } from 'react-redux';

function ExperiencePage() {
  return (
    <>
      <PageHeader />
      <Experience />
      <Footer />
    </>
  );
}

export default ExperiencePage;
