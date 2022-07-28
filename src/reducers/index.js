// Ici on centralise les reducers de notre app
// les reducers sont des "spécialistes", techniquement, des fonctions
// ils servent à retourner un nouvel état, une nouvelle version du state
// chaque reducer aura des valeurs initiales par défaut
// store : usine / reducer : ouvrier / initialState : entrepot

import { combineReducers } from 'redux';

// Import des reducers
import experiencesReducer from './experiences';
import userReducer from './user';
import countryReducer from './country';
import messageReducer from './message';
import thematicReducer from './thematic';

// On combine les différents reducers en un seul
const rootReducer = combineReducers({
  experiences: experiencesReducer,
  user: userReducer,
  country: countryReducer,
  message: messageReducer,
  thematic: thematicReducer
});

export default rootReducer;
