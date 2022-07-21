// Composant qui gère l'affichage du formulaire de connexion
// Commun à toutes les pages - Lorsque l'utilisateur n'est pas connecté
// == Import
import { useState } from 'react';
import './style.scss';
import logo from '../../../assets/image/logo-mini.png'
import { Image, Button, Form, Select, Icon } from 'semantic-ui-react';

const options = [
  { key: '1', text: 'France', value: 'France' },
  { key: '2', text: 'Japan', value: 'Japan' },
]

function SignIn() {
  // Mise en place d'un emplacement dans le state pour l'affichage de l'encart d'inscription
  // La valeur par défaut est false, car fermée de prime abord
  const [isSignInOpened, setIsSignInOpened] = useState(false);
  return (
    <div className="signIn">
      <Button 
        onClick={
          () => {
            setIsSignInOpened(!isSignInOpened);
            const form = document.querySelector('.signIn__form--hidden');
            form.classList.add("signIn__form--display");
          }
        }
        className="signIn__button"
      >
          Sign in
      </Button>
      <Form className="signIn__form--hidden">
      <Button 
        onClick={
          () => {
            setIsSignInOpened(!isSignInOpened);
            const form = document.querySelector('.signIn__form--hidden');
            form.classList.remove("signIn__form--display");          
          }
        }
        icon className="close__button" 
        circular ><Icon  
        name="close" />
      </Button>
      <Image className='logo__mini' src={logo} size='mini' centered />
        <Form.Field>
          <label>Firstname*</label>
          <input placeholder='Firstname' />
        </Form.Field>
        <Form.Field>
          <label>Lastname*</label>
          <input placeholder='Lastname' />
        </Form.Field>
        <Form.Field>
          <label>Pseudo*</label>
          <input placeholder='Pseudo' />
        </Form.Field>
        <Form.Field
            control={Select}
            label='Country*'
            options={options}
            placeholder='Country'
            search
          />
        <Form.Field>
          <label>Email*</label>
          <input placeholder='Password' />
        </Form.Field>
        <Form.Field>
          <label>Password*</label>
          <input placeholder='Password' />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password*</label>
          <input placeholder='Password' />
        </Form.Field>
        <Button type='submit' className="signIn__form__button">Sign in</Button>
      </Form>
    </div>
  );
}

// == Export
export default SignIn;
