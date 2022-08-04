// Imports
import './style.scss';
import { Card, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveIdProfile } from '../../../../../actions/profile';
import { saveExperienceId } from '../../../../../actions/experience';

function ExperienceCard({
  country, feedback, picture, title, user, createdAt, id, slugTitle,
}) {
  const userPseudoSlug = user.pseudoSlug;

  const dispatch = useDispatch();

  const handleClickProfile = () => {
    console.log(id);
    dispatch(saveIdProfile(user.id));
  };

  const handleClick = () => {
    dispatch(saveExperienceId(id));
  };
  return (
    <Card className="experience__card">
      <Image src={`http://romain2518-server.eddi.cloud/images/experiencePicture/${picture}`} wrapped ui={false} />
      <Link to={`/volunteers/${userPseudoSlug}`}>
        <Image onClick={handleClickProfile} className="user__image" src={`http://romain2518-server.eddi.cloud/images/pp/${user.profilePicture}`} size="tiny" />
      </Link>
      <Card.Content>
        <Card.Meta>
          <span className="experience__country">{country}</span>
          <Link to={`/volunteers/${userPseudoSlug}`}>
            - <span onClick={handleClickProfile} className="author__name">{user.pseudo}</span>
          </Link>
        </Card.Meta>
        <Card.Header className="experience__title--card" title={title}>{title.length > 50 ? `${title.slice(0, 50)}...` : title}</Card.Header>
        <Card.Description className="experience__preview">{feedback.slice(0, 147)}...</Card.Description>
        <Link onClick={handleClick} to={`/experiences/${id}/${slugTitle}`}>
          <Button
            className="button__experience__details"
          >
            See more
          </Button>
        </Link>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta>
          <span className="uploaded__date">Uploaded the {new Date(createdAt).toDateString()}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default ExperienceCard;
