//= = Imports
// Import d'axios pour les requêtes API
import axios from 'axios';
import { changeNewMessageExpContent, 
  FETCH_RECEIVED_MESSAGE, 
  saveReceivedMessage, 
  SAVE_NEW_EXP_MESSAGE, 
  SAVE_NEW_MESSAGE,
  SAVE_MESSAGE_AS_READ,
 } from '../actions/message';

const axiosInstance = axios.create({
  // on définit l'url de base
  baseURL: 'http://romain2518-server.eddi.cloud/api',
});

const messageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECEIVED_MESSAGE: {
      // On renseigne le end point
      const state = store.getState();
      // Récupération de l'id de l'utilisateur connecté dans le state
      const { id, token } = state.user.login;
      // console.log(id);

      // Requête API avec transmission du token pour authentification
      axiosInstance.get(
        `/receivedMessages/${id}/20/0`,
        { headers: { Authorization: `Bearer ${token}` } },
      )

      // On traite la réponse
        .then((response) => {
          console.log(response);
          store.dispatch(saveReceivedMessage(response.data));
        })
      // On catche la potentielle erreur
        .catch(
          (error) => {
            console.log(error);
          },
        );

      return next(action);
    }

    case SAVE_NEW_MESSAGE: {
      const state = store.getState();
      // Récupération de des infos du destinataire du message et du contenu
      const { receiverId, messageContent } = state.message.newMessage;
      const { token } = state.user.login;
      // console.log(messageContent);

      // Requête API avec transmission du token pour authentification
      //! le header à la fin !!
      axiosInstance.post(
        '/message',
        {
          message: messageContent,
          userReceiver: receiverId,
        },

        { headers: { Authorization: `Bearer ${token}` } },
        // {
        //   message: messageContent,
        //   userReceiver: receiverId
        // },

      )

      // On traite la réponse
        .then((response) => {
          console.log(response);
        })
      // On catche la potentielle erreur
        .catch(
          (error) => {
            console.log(error);
          },
        );

      return next(action);
    }
    case SAVE_NEW_EXP_MESSAGE: {
      const state = store.getState();
      // Récupération de des infos du destinataire du message et du contenu
      const { receiverId, messageExpContent } = state.message.newExperienceMessage;
      const { token } = state.user.login;
      // console.log(messageContent);

      // Requête API avec transmission du token pour authentification
      //! le header à la fin !!
      axiosInstance.post(
        '/message',
        {
          message: messageExpContent,
          userReceiver: receiverId,
        },

        { headers: { Authorization: `Bearer ${token}` } },
        // {
        //   message: messageContent,
        //   userReceiver: receiverId
        // },

      )

      // On traite la réponse
        .then((response) => {
          console.log(response); 
          store.dispatch(changeNewMessageExpContent(''));
          console.log(receiverId)
        })
      // On catche la potentielle erreur
        .catch(
          (error) => {
            console.log(error); 
          },
        );

      return next(action);
    }

    case SAVE_MESSAGE_AS_READ: {

      const state = store.getState();
      // Récupération de l'id du message qui vient d'être ouvert
      const { hasBeenRead } = state.message.settings;
      const { token } = state.user.login;

      axiosInstance.get(
        `/message/${hasBeenRead}/setRead`,
        { headers: { Authorization: `Bearer ${token}` } },
      )
      
      // On traite la réponse
        .then((response) => {
          console.log(response); 
        })
      // On catche la potentielle erreur
        .catch(
          (error) => {
            console.log(error); 
          },
        );
         
      return next(action);
    }

    default:
      next(action);
  }
};

export default messageMiddleware;
