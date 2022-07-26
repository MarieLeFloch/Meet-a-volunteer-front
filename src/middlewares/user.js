//== Imports

import axios from 'axios';

import { LOGIN }  from '../actions/user';


const axiosInstance = axios.create({
    // par exemple, on peut définir une url de base !
    baseURL: 'http://romaingibet-server.eddi.cloud/api/',
  });
const userMiddleware = (store) => (next) => action => {
    switch (action.type) {
        case LOGIN: {
            // On récupère dans le store, dans la propriété user, les propriétés email et password
            // via du triple destructuring
            const { user: { login : { email, password } } } = store.getState();
            
            axiosInstance.post(
              'login_check',
              {
                username: email,
                password: password
              },
            )
              .then((response) => {
                // console.log(response);            
                return next(action);
              })
              .catch((error) => {
                console.log(error);
                return next(action);
              });
      
            return next(action);
          }
        default : 
    next(action)    
    }
}


export default userMiddleware;