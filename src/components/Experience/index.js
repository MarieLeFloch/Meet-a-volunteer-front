import Footer from '../Footer';
import PageHeader from '../Header/PageHeader';
import Experience from './ExperienceContent';
import './style.scss';
import { useSelector } from 'react-redux';

function ExperiencePage() {
  const { user } = useSelector((state) => state.experiences.detailedExperience);
  console.log(user);
  return (
    <>
      <PageHeader />
      <Experience user={user}/>
      <Footer />
    </>
  );
}

export default ExperiencePage;
