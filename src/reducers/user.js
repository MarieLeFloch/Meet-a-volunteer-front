import { TOGGLE_SETTINGS } from "../actions/user";




// On crée un emplacement dans le state correspondant au user : la connexion et l'inscription
// Ouverture - fermeture des formulaires
// Envoie des informations pour la connexion et l'inscription
// Par défaut, ils sont à false
export const initialState = {
  logged: false,
  // sous paramètre d'affichage du formulaire
  settings : {
    isOpen : false
  }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SETTINGS :
    return {
        ...state,
        settings: {
            ...state.settings,
            isOpen: !state.settings.isOpen,
        },
    };
    default:
      return state;
  }
};

export default reducer;
