// Imports
import NewMessage from './NewMessage';
import MessageList from './MessageList';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';

function ConversationContent() {
  //const { receiverId } = useSelector((state)=>state.message.newMessage);

  return (
    <div className='Conversation__content'>
        <h1>Messages</h1>
        <NewMessage />
        <MessageList />
    </div>
  );
}

export default ConversationContent;

//         {(receiverId) ? <NewMessage /> : <></>}
