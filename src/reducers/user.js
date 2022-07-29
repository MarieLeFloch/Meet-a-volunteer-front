import {
  TOGGLE_SETTINGS_LOGIN, TOGGLE_SETTINGS_SIGNIN, CHANGE_LOGIN_FIELD_VALUE, CHANGE_SIGNIN_FIELD_VALUE, IS_LOGGED, SAVE_TOKEN, SAVE_USER_PSEUDO, SAVE_USER_ID,
} from '../actions/user';

// On crée un emplacement dans le state correspondant au user : la connexion et l'inscription
// Ouverture - fermeture des formulaires
// Envoie des informations pour la connexion et l'inscription
// Par défaut, ils sont à false
export const initialState = {
  logged: false,
  // sous paramètre d'affichage du formulaire
  settings: {
    isLoginOpened: false,
    isSigninOpened: false,
  },

  signin: {
    firstname: '',
    lastname: '',
    pseudo: '',
    country: '',
    email: '',
    password: '',
    confirmPassword: '',
  },

  login: {
    email: '',
    password: '',
    token: '',
    pseudo: '',
    id: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // à l'action TOGGLE_SETTINGS
    case TOGGLE_SETTINGS_LOGIN:
      return {
        // retourne l'ensemble du state courant
        ...state,
        // mais dans settings
        settings: {
          // retourne le contenu courant
          ...state.settings,
          // sauf la prop isLoginOpened que tu modifies par l'inverse de sa valeur
          isLoginOpened: !state.settings.isLoginOpened,
        },
      };
    case TOGGLE_SETTINGS_SIGNIN:
      return {
        ...state,
        settings: {
          ...state.settings,
          isSigninOpened: !state.settings.isSigninOpened,
        },
      };
    case CHANGE_LOGIN_FIELD_VALUE:
      return {
        ...state,
        // Avec le crochet : on accède dynamiquement à une des propriétés
        // Selon ce qu'on entre en argument à l'appel de la fonction
        login: {
          ...state.login,
          [action.field]: action.value,
        },

      };
    case CHANGE_SIGNIN_FIELD_VALUE:
      return {
        ...state,
        signin: {
          ...state.signin,
          [action.field]: action.value,
        },
      };
    case IS_LOGGED:
      return {
        ...state,
        logged: !state.logged,
      };
    case SAVE_TOKEN:
      return {
        ...state,
        login: {
          ...state.login,
          token: action.value,
        },
      };
    case SAVE_USER_PSEUDO:
      return {
        ...state,
        login: {
          ...state.login,
          pseudo: action.value,
        },
      };
    case SAVE_USER_ID:
      return {
        ...state,
        login: {
          ...state.login,
          id: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
