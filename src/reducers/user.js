import { TOGGLE_SETTINGS_LOGIN, TOGGLE_SETTINGS_SIGNIN } from "../actions/user";




// On crée un emplacement dans le state correspondant au user : la connexion et l'inscription
// Ouverture - fermeture des formulaires
// Envoie des informations pour la connexion et l'inscription
// Par défaut, ils sont à false
export const initialState = {
  logged: false,
  // sous paramètre d'affichage du formulaire
  settings : {
    isLoginOpened : false,
    isSigninOpened : false,
  }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // à l'action TOGGLE_SETTINGS
    case TOGGLE_SETTINGS_LOGIN :
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
    case TOGGLE_SETTINGS_SIGNIN :
      return {
          ...state,
          settings: {
              ...state.settings,
              isSigninOpened: !state.settings.isSigninOpened,
          },
      };
  
    default:
      return state;
  }
};

export default reducer;
