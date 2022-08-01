// Gestion appel API pour les profils

//= = Imports
// Import d'axios pour les requêtes API
import axios from 'axios';
import { FETCH_PROFILE_DETAILS, saveProfileDetails } from '../actions/volunteers';

const axiosInstance = axios.create({
  // on définit l'url de base
  baseURL: 'http://romain2518-server.eddi.cloud/api',
});
const profileMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROFILE_DETAILS: {
      const state = store.getState();
      // const { thematicList } = state.thematic.settings;

      // On renseigne le end point contenant l'id du profil
      axiosInstance.get('user/1')

      // On traite la réponse
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveProfileDetails(response.data));
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

export default profileMiddleware;
