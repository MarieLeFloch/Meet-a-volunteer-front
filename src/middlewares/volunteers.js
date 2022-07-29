// Gestion appel API pour les volontaires

//= = Imports
// Import d'axios pour les requêtes API
import axios from 'axios';
import { FETCH_VOLUNTEERS, saveVolunteers } from '../actions/volunteers';

const axiosInstance = axios.create({
  // on définit l'url de base
  baseURL: 'http://romaingibet-server.eddi.cloud/api/',
});
const volunteersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_VOLUNTEERS: {
      const state = store.getState();
      // const { thematicList } = state.thematic.settings;

      // On renseigne le end point
      axiosInstance.get('user/50/0')

      // On traite la réponse
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveVolunteers(response.data));
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

export default volunteersMiddleware;
