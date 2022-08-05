// == Import
import './style.scss';
import PageHeader from '../Header/PageHeader';
import LegalMentionsContent from '../LegalMentions/LegalMentionsContent';
import Footer from '../Footer';

function LegalMentions () {
  return (
    <div className="container__page__all">
      <div className="container__page__others">
          <PageHeader />
          <LegalMentionsContent />
          <Footer />
      </div>
    </div>
  )
}

export default LegalMentions;
