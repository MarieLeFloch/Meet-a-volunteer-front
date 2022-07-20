// == Import
import Sliders from '../HomeHeader/Sliders';
import LogIn from '../LogIn';
import SignIn from '../SignIn';
import 'semantic-ui-css/semantic.min.css'
import './style.scss';



function HomeHeader() {
  return (
    <div className="HomeHeader">
      <Sliders>
        
      </Sliders>
      <LogIn>

      </LogIn>
      <SignIn>

      </SignIn>
    </div>
  );
}

// == Export
export default HomeHeader;
