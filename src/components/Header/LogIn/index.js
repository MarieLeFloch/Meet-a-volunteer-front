// Composant qui gère l'affichage du formulaire de connexion
// Commun à toutes les pages - Lorsque l'utilisateur n'est pas connecté
// == Import
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import {
  Image, Button, Checkbox, Form, Icon,
} from 'semantic-ui-react';
import logo from '../../../assets/image/logo-mini.png';
import { toggleSettingLogin } from '../../../actions/user';
import { toggleSettingSignin } from '../../../actions/user';


function LogIn() {
  // Mise en place d'un emplacement dans le state pour l'affichage de l'encart d'inscription
  // La valeur par défaut est false, car fermée de prime abord

  // useSelector : hook permettant d'accéder au store
  // va récupérer la prop isOpen dans le reducer user, prop settings
  const { isSigninOpened , isLoginOpened } = useSelector((state)=>state.user.settings);

  // dispatch, fonction du store redux, permet d'émettre une intention
  // intention = action qu'on passe en argument
  // cette action est traduite dans le reducer user
  const dispatch = useDispatch();
  const handleToggleLogin = () => {
    dispatch(toggleSettingLogin());
    if ( isSigninOpened ) {
      dispatch(toggleSettingSignin())
    };
  }
  
  return (
    <div className="logIn">
      <Button
        onClick={handleToggleLogin}
        className="logIn__button"
      >
        Login
      </Button>
      <Form className={(isLoginOpened) ? " logIn__form--hidden logIn__form--display" : "logIn__form--hidden"}>
        <Button
          onClick={handleToggleLogin}
          icon
          className="close__button"
          circular
        ><Icon
          name="close"
        />
        </Button>
        <Image src={logo} size="mini" centered />
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="Stay connected" />
        </Form.Field>
        <Button type="submit" className="logIn__form__button">Login</Button>
      </Form>
    </div>
  );
}

// == Export
export default LogIn;
