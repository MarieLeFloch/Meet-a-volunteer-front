// Gestion appel API pour les expériences par thématique

//= = Imports
// Import d'axios pour les requêtes API
import axios from 'axios';
import { FETCH_EXPERIENCES_BY_THEMATIC, saveExperiencesByThematic } from '../actions/thematic';

const axiosInstance = axios.create({
  // on définit l'url de base
  baseURL: 'http://romain2518-server.eddi.cloud/api',
});
const thematicExperienceMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES_BY_THEMATIC: {
      // On renseigne le end point
      const state = store.getState();
      const { filtredThematicId } = state.thematic;
      
      axiosInstance.get(`/experiences/thematic/${filtredThematicId}/20/0`)

      // On traite la réponse
        .then((response) => {
          store.dispatch(saveExperiencesByThematic(response.data));
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

export default thematicExperienceMiddleware;
