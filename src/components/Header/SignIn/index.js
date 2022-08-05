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
import { toggleSettingSignin, toggleSettingLogin, changeSigninFieldValue, signIn } from '../../../actions/user';

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

  const handleBirthDateChange = (event) => {
    dispatch(changeSigninFieldValue(event.currentTarget.value, 'birthDate'));
  };

  const handlePasswordChange = (event) => {
    dispatch(changeSigninFieldValue(event.currentTarget.value, 'password'));
  };

  const handleConfirmPasswordChange = (event) => {
    dispatch(changeSigninFieldValue(event.currentTarget.value, 'confirmPassword'));
  };

  // CONNEXION

  // Méthode pour gérer l'envoie de l'inscripion
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if(password==confirmPassword){
        dispatch(signIn());
        dispatch(toggleSettingSignin());
    }else{
        const errorMsg = document.querySelector('.passwordError');
        errorMsg.classList.toggle('passwordError--display');
        }
  };

  return (
    <div className="signIn">
      <Button
        onClick={handleToggleSignin}
        className="button signIn__button"
      >
        Sign in
      </Button>
      <Form onSubmit={handleFormSubmit} className={(isSigninOpened) ? ' signIn__form--hidden signIn__form--display' : 'signIn__form--hidden'}>
        <Button
          onClick={handleToggleSignin}
          icon
          className="close__button"
          circular
          type="button"
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
          <label>Date of birth</label>
          <input 
            placeholder="Date of birth"
            onChange={handleBirthDateChange}
            // value={birthDate}
            type='date'
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
        <span className='passwordError'>The password doesn't match</span>
        <Button type="submit" className="button signIn__form__button">Sign in</Button>
      </Form>
    </div>
  );
}

// == Export
export default SignIn;
