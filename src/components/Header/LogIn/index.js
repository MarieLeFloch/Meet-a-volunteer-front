// Composant qui gère l'affichage du formulaire de connexion
// Commun à toutes les pages - Lorsque l'utilisateur n'est pas connecté
// == Import
import './style.scss';
import { Button } from 'semantic-ui-react'


function LogIn() {
  return (
    <div className="logIn">
      <Button className="logIn__button">Login</Button>
    </div>
  );
}

// == Export
export default LogIn;
