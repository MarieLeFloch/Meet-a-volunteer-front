// Gestion appel API pour les thématiques

//= = Imports
// Import d'axios pour les requêtes API
import axios from 'axios';
import { FETCH_THEMATICS, saveThematics } from '../actions/thematic';

const axiosInstance = axios.create({
  // on définit l'url de base
  baseURL: 'http://romaingibet-server.eddi.cloud/api/',
});
const thematicMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_THEMATICS: {
      const { thematic : thematicList } = store.getState();
      // const { thematicList } = state.thematic.settings;

      // On renseigne le end point
      axiosInstance.get('thematic/50/0')

      // On traite la réponse
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveThematics(response.data));
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

export default thematicMiddleware;
