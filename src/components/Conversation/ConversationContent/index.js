// Imports
import NewMessage from './NewMessage';
import MessageList from './MessageList';
import './style.scss';

function ConversationContent() {
  return (
    <div className="content__page__all content__page__others Conversation__content">
      <h1 className='main__title'>Messages</h1>
      <NewMessage />
      <MessageList />
    </div>
  );
}

export default ConversationContent;
