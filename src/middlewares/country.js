// Middleware : s'occupe de ce qui est asynchrone
// typiquement : appels API

//== Imports 
// Import d'axios pour les requêtes API
import axios from 'axios';
import { FETCH_COUNTRY, saveCountry } from '../actions/country';



const countryMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
       case FETCH_COUNTRY: {

        const state = store.getState()
        const { countryList } = state.user.settings;

        axios.get('https://restcountries.com/v3.1/all?fields=name') 
        
        .then ((response)=> {
            // console.log(response)
            let countryName = [
            ];
            let i = 0;
            response.data.forEach(country => {
              countryName.push({
                key: i++ ,
                text : country.name.common,
                value: country.name.common,
                });
            });
            store.dispatch(saveCountry(countryName));
        },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );

      return next(action);
      }
            
        default :
        next(action);
    }
}

export default countryMiddleware;
