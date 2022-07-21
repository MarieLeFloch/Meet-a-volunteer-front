// Imports
import './style.scss';
import { Card , Image, Button} from 'semantic-ui-react';
import ImageTest from '../../../../../assets/image/1.jpg';
import UserImageDefault from '../../../../../assets/image/user-default.png';

function ExperienceCard() {
  return (
    <Card className="experience__card">
      <Image src={ImageTest} wrapped ui={false} />
      <Image className="user__image" src={UserImageDefault} size="tiny"/>
      <Card.Content>
      <Card.Meta>
          <span className='experience__country'>Country</span>
        </Card.Meta>
      <Card.Meta>
          <span className='author__name'>Author</span>
        </Card.Meta>
        <Card.Header className='experience__title'>Title experience</Card.Header>
        <Card.Description className='experience__preview'>
          Soufflé cake chocolate oat cake powder icing pie brownie powder. Donut fruitcake jelly-o ...
        </Card.Description>
        <Button 
          className='button__experience__details'>
            See more
        </Button>
        </Card.Content>
      <Card.Content extra>
      <Card.Meta>
          <span className='uploaded__date'>Uploaded the 01/01/22</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default ExperienceCard;
