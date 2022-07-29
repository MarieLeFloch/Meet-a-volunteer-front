//= = Imports

import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { isLogged, LOGIN, saveToken, saveUserID, saveUserPseudo } from '../actions/user';

const axiosInstance = axios.create({
  // par exemple, on peut définir une url de base !
  baseURL: 'http://romaingibet-server.eddi.cloud/api/',
});
const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
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
    default:
      next(action);
  }
};

export default userMiddleware;
