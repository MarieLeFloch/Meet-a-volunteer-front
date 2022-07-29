// Gestion appel API pour les expériences de la page home

//= = Imports
// Import d'axios pour les requêtes API
import axios from 'axios';
import { FETCH_EXPERIENCES_HOME, saveExperiencesHome } from '../actions/experience';

const axiosInstance = axios.create({
  // on définit l'url de base
  baseURL: 'http://romaingibet-server.eddi.cloud/api/',
});
const homeExperienceMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES_HOME: {
      // On renseigne le end point
      // const state = store.getState();
      // const { filtredThematicId } = state.thematic;
      // console.log(filtredThematicId);

      axiosInstance.get('/experiences/random/9/0')

      // On traite la réponse
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveExperiencesHome(response.data));
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

export default homeExperienceMiddleware;
