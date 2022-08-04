import {
  TOGGLE_NEW_MESSAGE_SETTINGS,
  TOGGLE_SUCCESS_MESSAGE,
  SAVE_RECEIVED_MESSAGE,
  SET_NEW_MESSAGE,
  CHANGE_NEW_MESSAGE_CONTENT,
  SET_NEW_EXP_MESSAGE,
  TOGGLE_NEW_EXP_MESSAGE,
  CHANGE_NEW_MESSAGE_EXP_CONTENT,
  TOGGLE_SUCCESS_EXP_MESSAGE,
  SET_RECEIVER_ID,

} from '../actions/message';

// On crée les emplacements dans le state lié aux messages

export const initialState = {
  // Emplacement pour l'ouverture/fermeture de l'encart d'envoi d'un nouveau message
  settings: {
    isNewMessageOpened: false,
    isNewExpMessageOpened: false,
    hasANewMessageBeenSent: false,
    hasANewExpMessageSent: false,
  },
  receivedMessageList: [],
  newMessage: {
    receiverId: '',
    receiverPseudo: '',
    messageContent: '',
  },
  newExperienceMessage: {
    receiverExpId: '',
    receiverExpPseudo: '',
    messageExpContent: '',
    receiverId: '',
  },

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Au clic sur l'icone write a new message
    case TOGGLE_NEW_MESSAGE_SETTINGS:
      return {
        // retourne l'ensemble du state courant
        ...state,
        // mais dans settings
        settings: {
          ...state.settings,
          // inverse la valeur de isNewMessageOpened, afin d'afficher l'encart de saisie d'un nouveau message
          isNewMessageOpened: !state.settings.isNewMessageOpened,
        },
        // et on remet le contenu à 0 si a déjà été modifié
        newMessage: {
          ...state.newMessage,
          // inverse la valeur de hasANewMessageBeenSent
          messageContent: '',
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
          // recupere l'id et le pseudo du profil cliqué
          receiverId: action.id,
          receiverPseudo: action.pseudo,
        },
      };
    case CHANGE_NEW_MESSAGE_CONTENT:
      return {
        // retourne l'ensemble du state courant
        ...state,
        // mais dans newMessage
        newMessage: {
          ...state.newMessage,
          // enregistre le message saisi
          messageContent: action.content,
        },
      };
      // ? ----------------Experience Message------------------------
    case TOGGLE_NEW_EXP_MESSAGE:
      return {
        // retourne l'ensemble du state courant
        ...state,
        // mais dans settings
        settings: {
          ...state.settings,
          // inverse la valeur de isNewMessageOpened
          isNewExpMessageOpened: !state.settings.isNewExpMessageOpened,
        },
      };
    case TOGGLE_SUCCESS_EXP_MESSAGE:
      return {
        // retourne l'ensemble du state courant
        ...state,
        // mais dans settings
        settings: {
          ...state.settings,
          // inverse la valeur de hasANewMessageBeenSent
          hasANewExpMessageSent: !state.settings.hasANewExpMessageSent,
        },
      };
    case SET_NEW_EXP_MESSAGE:
      return {
        // retourne l'ensemble du state courant
        ...state,
        // mais dans newMessage
        newExperienceMessage: {
          ...state.newExperienceMessage,
          // inverse la valeur de hasANewMessageBeenSent
          receiverId: action.id,
          receiverPseudo: action.pseudo,
        },
      };
    case CHANGE_NEW_MESSAGE_EXP_CONTENT:
      return {
        // retourne l'ensemble du state courant
        ...state,
        // mais dans newMessage
        newExperienceMessage: {
          ...state.newExperienceMessage,
          // inverse la valeur de hasANewMessageBeenSent
          messageExpContent: action.content,
        },
      };
    case SET_RECEIVER_ID:
      return {
        ...state,
        newExperienceMessage: {
          ...state.newExperienceMessage,
          // inverse la valeur de hasANewMessageBeenSent
          receiverId: action.id,
        },
      };
    default:
      return state;
  }
};

export default reducer;
