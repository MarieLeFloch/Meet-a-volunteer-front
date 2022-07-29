import {
  TOGGLE_NEW_MESSAGE_SETTINGS, 
  TOGGLE_SUCCESS_MESSAGE, 
  SAVE_RECEIVED_MESSAGE,
  SET_NEW_MESSAGE

} from '../actions/message';

// On crée les emplacements dans le state lié aux messages

export const initialState = {
  // Emplacement pour l'ouverture/fermeture de l'encart d'envoi d'un nouveau message
  settings: {
    isNewMessageOpened: false,
    hasANewMessageBeenSent: false,
  },
  receivedMessageList : [],
  newMessage: {
    receiverId : '',
    receiverPseudo : '',
    messageContent : '',
  }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NEW_MESSAGE_SETTINGS:
      return {
        // retourne l'ensemble du state courant
        ...state,
        // mais dans settings
        settings: {
          ...state.settings,
          // inverse la valeur de isNewMessageOpened
          isNewMessageOpened: !state.settings.isNewMessageOpened,
        },
      };
    case TOGGLE_SUCCESS_MESSAGE:
      return {
        // retourne l'ensemble du state courant
        ...state,
        // mais dans settings
        settings: {
          ...state.settings,
          // inverse la valeur de hasANewMessageBeenSent
          hasANewMessageBeenSent: !state.settings.hasANewMessageBeenSent,
        },
      };
    case SAVE_RECEIVED_MESSAGE:
      return {
        // retourne l'ensemble du state courant
        ...state,
          // enregistre la liste des messages reçus
          receivedMessageList: action.list,
        }; 
    case SET_NEW_MESSAGE:
      return {
        // retourne l'ensemble du state courant
        ...state,
        // mais dans newMessage
        newMessage: {
          ...state.newMessage,
          // inverse la valeur de hasANewMessageBeenSent
          receiverId: action.id,
          receiverPseudo: action.pseudo,
        },
      };

      default:
      return state;

  }
};

export default reducer;
