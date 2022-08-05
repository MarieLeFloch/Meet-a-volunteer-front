// Imports
import Footer from '../Footer';
import PageHeader from '../Header/PageHeader';
import ConversationContent from './ConversationContent';
import './style.scss';

function Conversation() {
  return (
    <div className="container__page__all">
      <div className="container__page__others">
        <PageHeader />
        <ConversationContent />
        <Footer />
      </div>
    </div>
  );
}

export default Conversation;
