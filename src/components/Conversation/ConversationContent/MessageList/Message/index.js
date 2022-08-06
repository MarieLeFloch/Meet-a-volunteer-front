// Imports
import './style.scss';
import { Image, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleNewMessageSettings,
  setNewMessage,
  toggleSuccessMessage,
  getIdMessageRead,
  saveMessageAsRead,
} from '../../../../../actions/message';

// Composant de la messagerie
function Message({
  id, message, userSender, createdAt, isRead,
}) {

  // On récupère le booléen enregistré dans le state qui est à true lorsqu'un message vient d'être envoyé
  const { hasANewMessageBeenSent } = useSelector((state) => state.message.settings);
  // On récupère les infos de la personne qui a envoyé le message pour les afficher
  const pseudoSender = userSender.pseudo;
  const idSender = userSender.id;
  const pictureSender = userSender.profilePicture;

  const dispatch = useDispatch();

  // Méthode de gestion de l'envoie d'un nouveau message
  const handleToggleNewMessage = () => {
    // enregistrement des infos du destinataire à qui on souhaite répondre
    dispatch(setNewMessage(idSender, pseudoSender));
    // ouverture de l'encart
    dispatch(toggleNewMessageSettings());
    const newMessage = document.querySelector('.new__message');
    newMessage.classList.toggle('new__message--display');
    // affichage ou suppression du message de succès d'envoi
    if (hasANewMessageBeenSent) {
      dispatch(toggleSuccessMessage());
    }
  };

  // Méthode gérant le click sur un message reçu
  function showEntireMessage(event) {
    // on montre l'entiereté du message
    const p = event.currentTarget;
    p.classList.toggle('preview');
    // On enregistre le message comme lu (pour la notification de la nav)
    dispatch(getIdMessageRead(id));
    dispatch(saveMessageAsRead());
  }

  return (
    <div className={(isRead) ? 'received__message' : 'received__message received__message--unRead'}>

      <div className="received__message__topBar">
        <div className="received__message__topBar--left">
          <Image src={`http://romain2518-server.eddi.cloud/images/pp/${pictureSender}`} avatar size="mini" />
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

      <div className={(isRead) ? 'received__message__content' : 'received__message__content received__message__content--unRead'}>
        <p className="preview" onClick={showEntireMessage}>{message}</p>
      </div>

    </div>
  );
}

export default Message;
