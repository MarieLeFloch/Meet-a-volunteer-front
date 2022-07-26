// Imports
import './style.scss';
import { Image } from 'semantic-ui-react';
import Avatar from '../../../../assets/image/user-default.png';


function ProfileIntro() {
  return (
      <div className='profile__intro'>
          <div className='profile__intro--image'>
              <Image src={Avatar} avatar size="small" />
          </div>
          <div className='profile__intro--pseudo'>
              <h2>Pseudo</h2>
          </div>
          <div className='profile__intro--bio'>
              <p>Lemon drops biscuit jelly beans croissant dessert tart tiramisu. Soufflé bear claw fruitcake cheesecake biscuit sweet candy. Biscuit chocolate bar pudding marshmallow brownie powder cupcake dragée. Jelly muffin chocolate cake fruitcake cookie sweet roll toffee brownie. </p>
          </div>
      </div>
  );
}

export default ProfileIntro;
