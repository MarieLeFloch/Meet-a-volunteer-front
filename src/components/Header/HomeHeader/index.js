// == Import
import Sliders from '../HomeHeader/Sliders';
import Description from '../HomeHeader/Description';
import LogIn from '../LogIn';
import SignIn from '../SignIn';
import 'semantic-ui-css/semantic.min.css'
import './style.scss';
import NavBar from '../Nav';



function HomeHeader() {
  return (
    <div className="HomeHeader">
      <Sliders>
        
      </Sliders>
      <LogIn>

      </LogIn>
      <SignIn>

      </SignIn>
      <Description>

      </Description>
      
    </div>
  );
}

// == Export
export default HomeHeader;
