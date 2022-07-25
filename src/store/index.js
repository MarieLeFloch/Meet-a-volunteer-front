// Store de redux : regroupe les emplacements du state de notre application
// Permet de créer des states dans chaque composant, qui seront disponibles partout dans l'app

import { createStore, applyMiddleware, compose } from 'redux';

// reducer : actions qui vont influer sur le state
import reducer from 'src/reducers';

// middleware : gestion des fonctions asynchrones (call API)
import countryMiddleware from '../middlewares/country';

// lie le projet au redux devtools (accès state - extension redux)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// permet d'ajouter des fonctionnalités à notre store Redux, ici on lie le store à notre devtool 
const enhancers = composeEnhancers(
  applyMiddleware(countryMiddleware),
);

// Création du store (createStore: deprécié mais toujours fonctionnel)
const store = createStore(reducer, enhancers);

export default store;
