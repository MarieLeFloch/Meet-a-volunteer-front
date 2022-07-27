// Imports
import MessageList from './MessageList';
import './style.scss';

function ConversationContent() {
  return (
    <div className='Conversation__content'>
        <h1>Messages</h1>
        <MessageList />
    </div>
  );
}

export default ConversationContent;
