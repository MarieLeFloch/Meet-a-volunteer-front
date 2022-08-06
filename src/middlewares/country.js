// Middleware : s'occupe de ce qui est asynchrone
// typiquement : appels API
// Ici on fait appel à une API externe restcountries.com

//= = Imports
// Import d'axios pour les requêtes API
import axios from 'axios';
import { sortBy } from 'lodash';
import { FETCH_COUNTRY, saveCountry } from '../actions/country';

const countryMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_COUNTRY: {
      axios.get('https://restcountries.com/v3.1/all?fields=name')

        .then((response) => {
          const countryName = [
          ];
          let i = 0;
          response.data.forEach((country) => {
            countryName.push({
              key: i++,
              text: country.name.common,
              value: country.name.common,
            });
          });
          const countryNameSorted = _.sortBy(countryName, 'value');
          store.dispatch(saveCountry(countryNameSorted));
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

export default countryMiddleware;
