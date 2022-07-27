// Imports
import Message from './Message';
import './style.scss';

function MessageList() {
  return (
    <div className='message__list'>
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default MessageList;
