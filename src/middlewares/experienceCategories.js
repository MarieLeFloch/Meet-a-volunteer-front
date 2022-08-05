//= = Imports

import axios from 'axios';
import {
  FETCH_VOLUNTEERING_TYPE, saveVolunteeringType, FETCH_RECEPTION_STRUCTURE, saveReceptionStructure,
} from '../actions/categories';

const axiosInstance = axios.create({
  // on définit l'url de base
  baseURL: 'http://marielefloch-server.eddi.cloud/api',
});

const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_VOLUNTEERING_TYPE: {
      axiosInstance.get('/volunteeringType/50/0')
        .then((response) => {
          const volunteeringType = [];
          let i = 0;
          response.data.forEach((item) => {
            volunteeringType.push({
              key: i += 1,
              text: item.name,
              value: item.id,
            });
          });
          store.dispatch(saveVolunteeringType(volunteeringType));
        })
        .catch(
          (error) => {
            console.log(error);
          },
        );
      return next(action);
    }
    case FETCH_RECEPTION_STRUCTURE: {
      axiosInstance.get('/receptionStructure/50/0')
        .then((response) => {
          const receptionStructure = [];
          let i = 0;
          response.data.forEach((item) => {
            receptionStructure.push({
              key: i += 1,
              text: item.name,
              value: item.id,
            });
          });
          store.dispatch(saveReceptionStructure(receptionStructure));
        })
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

export default categoriesMiddleware;
