// Store de redux : regroupe les emplacements du state de notre application
// Permet de créer des states dans chaque composant, qui seront disponibles partout dans l'app

import { createStore, applyMiddleware, compose } from 'redux';

// reducer : actions qui vont influer sur le state
import reducer from 'src/reducers';

// middleware : gestion des fonctions asynchrones (call API)
import countryMiddleware from '../middlewares/country';
import userMiddleware from '../middlewares/user';
import thematicMiddleware from '../middlewares/thematic';
import thematicExperienceMiddleware from '../middlewares/thematicExperience';
import homeExperienceMiddleware from '../middlewares/homeExperience';
import categoriesMiddleware from '../middlewares/experienceCategories';
import messageMiddleware from '../middlewares/message';
import volunteersMiddleware from '../middlewares/volunteers';
import profileMiddleware from '../middlewares/volunteers';


// lie le projet au redux devtools (accès state - extension redux)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// permet d'ajouter des fonctionnalités à notre store Redux, ici on lie le store à notre devtool
const enhancers = composeEnhancers(
  applyMiddleware(
    countryMiddleware,
    userMiddleware,
    thematicMiddleware,
    thematicExperienceMiddleware,
    homeExperienceMiddleware,
    categoriesMiddleware,
    messageMiddleware,
    volunteersMiddleware,
    profileMiddleware
  ),
);

// Création du store (createStore: deprécié mais toujours fonctionnel)
const store = createStore(reducer, enhancers);

export default store;
