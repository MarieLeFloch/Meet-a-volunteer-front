// Imports
import Message from './Message';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReceivedMessage } from '../../../../actions/message';
import { useEffect } from 'react';

function MessageList() {
  // Au chargement de la page des message, on lance l'appel API pour récupérer les messages reçus
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(fetchReceivedMessage());
    },
    // tableau vide : le composant courant
    // Lorsque le composant est vide, donc au chargement de ce composant
    // on lance la méthode
    [],
  );

  // Récupération de la liste des messages dans le state afin de mapper dessus
  const messageList = useSelector((state) => state.message.receivedMessageList);
    
  return (
    <div className="message__list">
      {messageList.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
}

export default MessageList;
