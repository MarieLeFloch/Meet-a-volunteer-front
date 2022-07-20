// Composant qui gère l'affichage du formulaire de connexion
// Commun à toutes les pages - Lorsque l'utilisateur n'est pas connecté
// == Import
import './style.scss';
import { Button, Checkbox, Form } from 'semantic-ui-react';



function LogIn() {
  return (
    <div className="logIn">
      <Button className="logIn__button">Login</Button>

      <Form className="logIn__form">
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
