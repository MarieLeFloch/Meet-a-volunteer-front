// Imports
import './style.scss';
import { Card, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ImageTest from '../../../../../assets/image/1.jpg';
import UserImageDefault from '../../../../../assets/image/user-default.png';

function ExperienceCard({
  country, feedback, picture, title, user, createdAt, id, slugTitle,
}) {
  const userPseudoSlug = user.pseudoSlug;
  return (
    <Card className="experience__card">
      <Image src={`http://romaingibet-server.eddi.cloud/images/experiencePicture/${picture}`} wrapped ui={false} />
      <Link to={`/volunteers/${userPseudoSlug}`}>
        <Image className="user__image" src={UserImageDefault} size="tiny" />
      </Link>
      <Card.Content>
        <Card.Meta>
          <span className="experience__country">{country}</span>
        </Card.Meta>
        <Card.Meta>
          <Link to={`/volunteers/${userPseudoSlug}`}>
            <span className="author__name">{user.pseudo}</span>
          </Link>
        </Card.Meta>
        <Card.Header className="experience__title">{title}</Card.Header>
        <Card.Description className="experience__preview">
          Soufflé cake chocolate oat cake powder icing pie brownie powder. Donut fruitcake jelly-o ...
        </Card.Description>
        <Link to={`/experiences/${id}/${slugTitle}`}>
          <Button
            className="button__experience__details"
          >
            See more
          </Button>
        </Link>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta>
          <span className="uploaded__date">Uploaded the {createdAt}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default ExperienceCard;
