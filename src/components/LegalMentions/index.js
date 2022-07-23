// == Import
import './style.scss';
import PageHeader from '../Header/PageHeader';
import LegalMentionsContent from '../LegalMentions/LegalMentionsContent';
import Footer from '../Footer';

function LegalMentions () {
  return (
  <>
    <PageHeader />
    <LegalMentionsContent />
    <Footer />
  </>
  )
}

export default LegalMentions;
