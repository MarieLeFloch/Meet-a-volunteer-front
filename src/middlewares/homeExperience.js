// Gestion appel API pour les expériences de la page home

//= = Imports
// Import d'axios pour les requêtes API
import axios from 'axios';
import { ADD_EXPERIENCE, FETCH_EXPERIENCES_HOME, saveExperiencesHome } from '../actions/experience';

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
    case ADD_EXPERIENCE: {
      const {
        experiences: {
          addExperience: {
            title,
            typeOfVolunteering,
            hostOrganization,
            thematics,
            country,
            year,
            duration,
            spokenLanguageFirst,
            spokenLanguageSecond,
            participationFees,
            accomodation,
            food,
            feedBack,
            image,
          },
        },
      } = store.getState();
      const { user: { login: { token } } } = store.getState();
      axiosInstance.post(
        '/experiences/',
        {
          title: title,
          country: country,
          year: year,
          duration: duration,
          feedback: feedBack,
          participation_fee: participationFees,
          isHosted: accomodation,
          isFed: food,
          volunteeringType: typeOfVolunteering,
          receptionStructure: hostOrganization,
          thematic: thematics,
          language: [spokenLanguageFirst, spokenLanguageSecond],
          picture: image,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      )
        .then((response) => {
          console.log(response);
        })
      // On catche la potentielle erreur
        .catch(
          (error) => {
            console.log(error);
            console.log({
              title: title,
              country: country,
              year: year,
              duration: duration,
              feedback: feedBack,
              participation_fee: participationFees,
              isHosted: accomodation,
              isFed: food,
              volunteeringType: typeOfVolunteering,
              receptionStructure: hostOrganization,
              thematic: thematics,
              language: [spokenLanguageFirst, spokenLanguageSecond],
            });
          },
        );

      return next(action);
    }

    default:
      next(action);
  }
};

export default homeExperienceMiddleware;
