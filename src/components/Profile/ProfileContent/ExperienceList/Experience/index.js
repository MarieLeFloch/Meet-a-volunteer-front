// Imports
import './style.scss';
import { Image, Button, Icon } from 'semantic-ui-react';
import photo from '../../../../../assets/image/9.jpg';

function Experience() {
  return (
    <div className='profile__experience'>
        <div className='profile__experience--image'>
            <Image src={photo} size="medium" />
        </div>
        <div className='profile__experience--text'>
            <h3>Title of experience</h3>
            <p>Lemon drops biscuit jelly beans croissant dessert tart tiramisu. Soufflé bear claw fruitcake cheesecake biscuit sweet candy. Biscuit chocolate bar pudding marshmallow brownie powder cupcake dragée. Jelly muffin chocolate cake fruitcake cookie sweet roll toffee brownie. Lemon drops biscuit jelly beans croissant dessert tart tiramisu. Soufflé bear claw fruitcake cheesecake biscuit sweet candy. Biscuit chocolate bar pudding marshmallow brownie powder cupcake dragée. Jelly muffin chocolate cake fruitcake cookie sweet roll toffee brownie.</p>
            <div><a>read more</a></div>
        </div>
        <Button icon className='profile__icon profile__experience--icon'>
        <Icon name='edit'/>
      </Button>
    </div>
  );
}

export default Experience;
