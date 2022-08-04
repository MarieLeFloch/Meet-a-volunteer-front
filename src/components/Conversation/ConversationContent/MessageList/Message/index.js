// Imports
import './style.scss';
import { Image, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../../../../assets/image/user-default.png';
import { toggleNewMessageSettings, setNewMessage, toggleSuccessMessage } from '../../../../../actions/message';

function Message({
  id, message, userSender, createdAt, isRead
}) {
  const { isNewMessageOpened, hasANewMessageBeenSent } = useSelector((state) => state.message.settings);

  const pseudoSender = userSender.pseudo;
  const idSender = userSender.id;

  const dispatch = useDispatch();

  const handleToggleNewMessage = () => {
    dispatch(setNewMessage(idSender, pseudoSender));
    dispatch(toggleNewMessageSettings());
    const newMessage = document.querySelector('.new__message');
    newMessage.classList.toggle('new__message--display');
    if(hasANewMessageBeenSent){
      dispatch(toggleSuccessMessage());
    }
  };

  function showEntireMessage(event) {
    const p = event.currentTarget;
    p.classList.toggle('preview');
  }
  // function handleNewMessage (event) {
  //    console.log("ça marche");
  //    setIsNewMessageOpened(!isNewMessageOpened);
  //    const newMessage = document.querySelector('.new__message');
  //     newMessage.classList.toggle('new__message--display')
  // }

  return (
    <div className={(isRead) ? "received__message" : "received__message received__message--unRead"}>

      <div className="received__message__topBar">
        <div className="received__message__topBar--left">
          <Image src={Avatar} avatar size="mini" />
          <span className="pseudo">{pseudoSender}</span>
        </div>
        <div className="received__message__topBar--right">
          <span className="date">{createdAt}</span>
          <div className="received__message__topBar--icon">
            <Icon name="edit" onClick={handleToggleNewMessage} />
            <Icon name="trash" />
          </div>
        </div>
      </div>

      <div className={(isRead) ? "received__message__content" : "received__message__content received__message__content--unRead"}>
        <p className="preview" onClick={showEntireMessage}>{message}</p>
      </div>

    </div>
  );
}

export default Message;
