// Imports
import Footer from '../Footer';
import PageHeader from '../Header/PageHeader';
import ConversationContent from './ConversationContent';
import './style.scss';

function Conversation() {
  return (
    <>
      <PageHeader />
      <ConversationContent />
      <Footer />
    </>
  );
}

export default Conversation;
