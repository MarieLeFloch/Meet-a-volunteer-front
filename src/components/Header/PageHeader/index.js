// == Import
import LogIn from '../LogIn';
import SignIn from '../SignIn';
import 'semantic-ui-css/semantic.min.css';
import './style.scss';
import NavBar from '../Nav';

function PageHeader() {
  return (
    <div className="PageHeader">
      <LogIn />
      <SignIn />
      <NavBar />
    </div>
  );
}

// == Export
export default PageHeader;
