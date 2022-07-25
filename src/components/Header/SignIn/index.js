// Composant qui gère l'affichage du formulaire de connexion
// Commun à toutes les pages - Lorsque l'utilisateur n'est pas connecté
// == Import
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { Image, Button, Form, Select, Icon } from 'semantic-ui-react';
import logo from '../../../assets/image/logo-mini.png';
import { toggleSettingSignin } from '../../../actions/user';
import { toggleSettingLogin } from '../../../actions/user';

const options = [
  { key: '1', text: 'France', value: 'France' },
  { key: '2', text: 'Japan', value: 'Japan' },
];

function SignIn() {
  // On récupère la propriété du store dans user settings
  const { isSigninOpened , isLoginOpened } = useSelector((state)=>state.user.settings);

  const dispatch = useDispatch();
  const handleToggleSignin = () => {
    dispatch(toggleSettingSignin());
    if ( isLoginOpened ) {
      dispatch(toggleSettingLogin())
    };
  }

  return (
    <div className="signIn">
      <Button
        onClick={handleToggleSignin}
        className="signIn__button"
      >
        Sign in
      </Button>
      <Form className={(isSigninOpened) ? " signIn__form--hidden signIn__form--display" : "signIn__form--hidden"}>
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
          <input placeholder="Firstname" />
        </Form.Field>
        <Form.Field>
          <label>Lastname*</label>
          <input placeholder="Lastname" />
        </Form.Field>
        <Form.Field>
          <label>Pseudo*</label>
          <input placeholder="Pseudo" />
        </Form.Field>
        <Form.Field
          control={Select}
          label="Country*"
          options={options}
          placeholder="Country"
          search
        />
        <Form.Field>
          <label>Email*</label>
          <input placeholder="Password" />
        </Form.Field>
        <Form.Field>
          <label>Password*</label>
          <input placeholder="Password" />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password*</label>
          <input placeholder="Password" />
        </Form.Field>
        <Button type="submit" className="signIn__form__button">Sign in</Button>
      </Form>
    </div>
  );
}

// == Export
export default SignIn;
