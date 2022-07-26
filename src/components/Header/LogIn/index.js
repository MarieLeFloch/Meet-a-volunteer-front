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
import { toggleSettingLogin, toggleSettingSignin, changeLoginFieldValue, login } from '../../../actions/user';

function LogIn() {
  // Mise en place d'un emplacement dans le state pour l'affichage de l'encart d'inscription
  // La valeur par défaut est false, car fermée de prime abord

  // useSelector : hook permettant d'accéder au store
  // va récupérer la prop isOpen dans le reducer user, prop settings
  const { isSigninOpened , isLoginOpened } = useSelector((state)=>state.user.settings);
  const {email, password} = useSelector ((state)=>state.user.login);
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
  // CHAMPS CONTROLES
  // On récupère la méthode pour changer la valeur des champs (controle en lecture)
  const handleEmailChange = (event) => {
     dispatch(changeLoginFieldValue(event.currentTarget.value, 'email'));
  };

  const handlePasswordChange = (event) => {
    dispatch(changeLoginFieldValue(event.currentTarget.value, 'password'));
 };

  // CONNEXION

  // Méthoder pour gérer la connexion
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login());
  };

  return (
    <div className="logIn">
      <Button
        onClick={handleToggleLogin}
        className="logIn__button"
      >
        Login
      </Button>
      <Form  onSubmit={handleSubmit} className={(isLoginOpened) ? " logIn__form--hidden logIn__form--display" : "logIn__form--hidden"}>
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
          <input 
            placeholder="Email" 
            onChange={handleEmailChange} 
            value = {email} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input 
            placeholder="Password" 
            onChange={handlePasswordChange} 
            value = {password} type="password" />
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
