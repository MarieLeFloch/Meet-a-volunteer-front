// == Import
import './style.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function NavList({ isOpen }) {

  // Gestion de la notification du nombre de messages non lu
  // On récupère la liste de message reçu, on crée un compteur qui boucle sur le statut "isRead" des messages
  // Doit être optimisé car ainsi ne se met à jour que lorsqu'on ouvre la messagerie
  const { receivedMessageList } = useSelector((state)=>state.message);
  let nbUnreadMessages = 0;

  if (receivedMessageList){
    receivedMessageList.forEach(message => {
      if(!message.isRead){
        nbUnreadMessages ++;
      }
    })
  }

  // Si le nb de message non lu est de 0 ou lorsqu'aucun message n'a encore été chargé, on n'affiche pas la notif
  return (
    <div className={(isOpen) ? 'list' : 'list__off'}>

      <ul className="list__container">
        <Link to="/volunteers"><li className="list-item">Volunteers</li></Link>
        <Link to="/conversation"><li className="list-item">Messages <span className={(nbUnreadMessages!=0) ? 'notif__nbMessages' : 'notif'}>{(nbUnreadMessages!=0)? nbUnreadMessages :''}</span></li></Link>
        <Link to="/experience/add"><li className="list-item">Share</li> </Link>
        <Link to="/about"><li className="list-mobil">About</li> </Link>
        <Link to="/contacts"><li className="list-mobil">Contacts</li> </Link>
        <Link to="/legal-mentions"><li className="list-mobil">Legal Mentions</li> </Link>
      </ul>

    </div>
  );
}

export default NavList;
