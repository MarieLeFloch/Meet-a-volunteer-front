//= = Imports

import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { isLogged, 
          LOGIN, 
          saveToken, 
          saveUserID, 
          saveUserPseudo,
          SIGNIN } from '../actions/user';

const axiosInstance = axios.create({
  // par exemple, on peut définir une url de base !
  baseURL: 'http://romain2518-server.eddi.cloud/api',
});
const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // GESTION DE LA CONNEXION
    case LOGIN: {
      // On récupère dans le store, dans la propriété user, les propriétés email et password
      // via du triple destructuring
      const { user: { login: { email, password, token } } } = store.getState();

      axiosInstance.post(
        'login_check',
        {
          username: email,
          password: password,
        },
      )
        .then((response) => {
          // console.log(response);
          store.dispatch(saveToken(response.data.token));
          store.dispatch(isLogged());
          const decodedToken = jwt_decode(response.data.token);
          store.dispatch(saveUserID(decodedToken.id));
          store.dispatch(saveUserPseudo(decodedToken.username));
          return next(action);
        })
        .catch((error) => {
          console.log(error);
          return next(action);
        });

      return next(action);
    }
    // GESTION DE L'INSCRIPTION
    case SIGNIN: {
      // On récupère les infos du store contenue dans user / signin
      const { user: { signin: { firstname, lastname, pseudo, country, email, birthDate, password, confirmPassword } } } = store.getState();

      axiosInstance.post(
        '/user',
        {
          pseudo: pseudo,
          firstname: firstname,
          password : password,
          lastname: lastname, 
          age: birthDate ,
          email: email,
          nativeCountry : country,

        },
      )
        .then((response) => {
          console.log(response);
          window.alert("Registration validated. Please identify yourself.");
          return next(action);
        })
        .catch((error) => {
          console.log(error);
          return next(action);
        });

      return next(action);
    }
    default:
      next(action);
  }
};

export default userMiddleware;
