// Composant qui gère l'affichage du formulaire de connexion
// Commun à toutes les pages - Lorsque l'utilisateur n'est pas connecté
// == Import
import { useState } from 'react';
import './style.scss';
import logo from '../../../assets/image/logo-mini.png'
import { Image, Button, Checkbox, Form, Icon } from 'semantic-ui-react';

function LogIn() {
  // Mise en place d'un emplacement dans le state pour l'affichage de l'encart d'inscription
  // La valeur par défaut est false, car fermée de prime abord
  const [isLogInOpened, setIsLogInOpened] = useState(false);  return (
    <div className="logIn">
      <Button 
        onClick={
          () => {
            setIsLogInOpened(!isLogInOpened);
            const form = document.querySelector('.logIn__form--hidden');
            form.classList.add("logIn__form--display");
          }
        }
        className="logIn__button"
        >
          Login
      </Button>
      <Form className="logIn__form--hidden">
      <Button 
        onClick={
          () => {
            setIsLogInOpened(!isLogInOpened);
            const form = document.querySelector('.logIn__form--hidden');
            form.classList.remove("logIn__form--display");          
          }
        }
        icon className="close__button" 
        circular ><Icon  
        name="close" 
      />
      </Button>
      <Image src={logo} size='mini' centered/>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Password' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Stay connected' />
        </Form.Field>
        <Button type='submit' className="logIn__form__button">Login</Button>
      </Form>
    </div>
  );
}

// == Export
export default LogIn;
