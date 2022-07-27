// Composant qui gère l'affichage du formulaire de connexion
// Commun à toutes les pages - Lorsque l'utilisateur n'est pas connecté
// == Import
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { useEffect } from 'react';
import {
  Image, Button, Form, Select, Icon,
} from 'semantic-ui-react';
import logo from '../../../assets/image/logo-mini.png';
import { toggleSettingSignin, toggleSettingLogin, changeSigninFieldValue } from '../../../actions/user';

const options = [
  { key: '1', text: 'France', value: 'France' },
  { key: '2', text: 'Japan', value: 'Japan' }];

function SignIn() {
  // On récupère la propriété du store dans user settings
  const { isSigninOpened, isLoginOpened } = useSelector((state) => state.user.settings);

  const {
    firstname, lastname, pseudo, country, email, password, confirmPassword,
  } = useSelector((state) => state.user.signin);

  const countryList = useSelector((state) => state.country.countryList);

  const dispatch = useDispatch();
  const handleToggleSignin = () => {
    dispatch(toggleSettingSignin());
    if (isLoginOpened) {
      dispatch(toggleSettingLogin());
    }
  };

  // CHAMPS CONTROLES
  // On récupère la méthode pour changer la valeur des champs (controle en lecture)
  const handleFirstnameChange = (event) => {
    dispatch(changeSigninFieldValue(event.currentTarget.value, 'firstname'));
  };

  const handleLastnameChange = (event) => {
    dispatch(changeSigninFieldValue(event.currentTarget.value, 'lastname'));
  };

  const handlePseudoChange = (event) => {
    dispatch(changeSigninFieldValue(event.currentTarget.value, 'pseudo'));
  };

  const handleCountryChange = (event, value) => {
    console.log(value.value);
    dispatch(changeSigninFieldValue(value.value, 'country'));
  };

  const handleEmailChange = (event) => {
    dispatch(changeSigninFieldValue(event.currentTarget.value, 'email'));
  };

  const handlePasswordChange = (event) => {
    dispatch(changeSigninFieldValue(event.currentTarget.value, 'password'));
  };

  const handleConfirmPasswordChange = (event) => {
    dispatch(changeSigninFieldValue(event.currentTarget.value, 'confirmPassword'));
  };

  return (
    <div className="signIn">
      <Button
        onClick={handleToggleSignin}
        className="signIn__button"
      >
        Sign in
      </Button>
      <Form className={(isSigninOpened) ? ' signIn__form--hidden signIn__form--display' : 'signIn__form--hidden'}>
        <Button
          onClick={handleToggleSignin}
          icon
          className="close__button"
          circular
        ><Icon
          name="close"
        />
        </Button>
        <Image className="logo__mini" src={logo} size="mini" centered />
        <Form.Field>
          <label>Firstname*</label>
          <input
            placeholder="Firstname"
            onChange={handleFirstnameChange}
            value={firstname}
          />
        </Form.Field>
        <Form.Field>
          <label>Lastname*</label>
          <input
            placeholder="Lastname"
            onChange={handleLastnameChange}
            value={lastname}
          />
        </Form.Field>
        <Form.Field>
          <label>Pseudo*</label>
          <input
            placeholder="Pseudo"
            onChange={handlePseudoChange}
            value={pseudo}
          />
        </Form.Field>
        <Form.Field
          control={Select}
          label="Country*"
          options={countryList}
          placeholder="Country"
          search
          onChange={handleCountryChange}
        />
        <Form.Field>
          <label>Email*</label>
          <input
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
            type="email"
          />
        </Form.Field>
        <Form.Field>
          <label>Picture</label>
          <input type='file'
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Password*</label>
          <input
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
            type="password"
          />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password*</label>
          <input
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
            type="password"
          />
        </Form.Field>
        <Button type="submit" className="signIn__form__button">Sign in</Button>
      </Form>
    </div>
  );
}

// == Export
export default SignIn;
