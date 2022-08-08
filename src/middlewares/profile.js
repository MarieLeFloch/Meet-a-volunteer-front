// Gestion appel API pour les profils

//= = Imports
// Import d'axios pour les requêtes API
import axios from 'axios';
import { FETCH_PROFILE_DETAILS, saveProfileDetails, SUBMIT_PROFILE } from '../actions/profile';
import { saveUserPicture } from '../actions/user';

const axiosInstance = axios.create({
  // on définit l'url de base
  baseURL: 'http://romain2518-server.eddi.cloud/api',
});
const profileMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROFILE_DETAILS: {
      const state = store.getState();
      const { profileId } = state.profile;

      // On renseigne le end point contenant l'id du profil à afficher
      axiosInstance.get(`/user/${profileId}`)

      // On traite la réponse
        .then((response) => {
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

    case SUBMIT_PROFILE: {
      const {
        profile: {
          profileDetails: {
            pseudo,
            biography,
            firstname,
            lastname,
            email,
            age,
            nativeCountry,
            profilePicture
          },
        },
      } = store.getState();

      const { user: { login: { token, id } } } = store.getState();
      // Enregistrement des entrées du state dans un FormData pour envoi de l'image
      const bodyFormData = new FormData();
      bodyFormData.append('pseudo', pseudo);
      bodyFormData.append('biography', biography);
      bodyFormData.append('firstname', firstname);
      bodyFormData.append('lastname', lastname);
      bodyFormData.append('email', email);
      bodyFormData.append('age', age);
      bodyFormData.append('nativeCountry', nativeCountry);
      // en Back : pictureFile est le fichier à envoyer, profilePicture est le chemin
      bodyFormData.append('pictureFile', profilePicture);
      // On renseigne le end point contenant l'id du profil à afficher
      axiosInstance.post(
        `/user/${id}`,
        bodyFormData,
        { headers: { Authorization: `Bearer ${token}` } },
        )

      // On traite la réponse
        .then((response) => {
          store.dispatch(saveProfileDetails(response.data));
          store.dispatch(saveUserPicture(response.data.profilePicture));
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
