// Imports
import './style.scss';
import { Card, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveIdProfile } from '../../../../../actions/profile';
import { saveExperienceId } from '../../../../../actions/experience';

// Récupération via destructuring les propriétés passées en props dans CardList via map
function ExperienceCard({
  country, feedback, picture, title, user, createdAt, id, slugTitle,
}) {

  // On récupère le slug du volontaire afin de rediriger au click vers sa page de profil
  const userPseudoSlug = user.pseudoSlug;

  const dispatch = useDispatch();

  // Enregistrement de l'id du profil cliqué pour lancer la récupération de ses infos
  const handleClickProfile = () => {
    dispatch(saveIdProfile(user.id));
  };

  // Enregistrement de l'id de l'expérience cliquée pour lancer la récupération de ses infos
  const handleClick = () => {
    dispatch(saveExperienceId(id));
  };

  return (
    <Card className="experience__card">
      <Image className="experience__card--image" src={`http://romain2518-server.eddi.cloud/images/experiencePicture/${picture}`} wrapped ui={false} />
      <Link to={`/volunteers/${userPseudoSlug}`}>
        <Image onClick={handleClickProfile} className="user__image" src={`http://romain2518-server.eddi.cloud/images/pp/${user.profilePicture}`} size="tiny" />
      </Link>
      <Card.Content>
        <Card.Meta>
          <span className="experience__country">{country}</span>
          <Link to={`/volunteers/${userPseudoSlug}`}>
            - <span onClick={handleClickProfile} className="user__pseudo">{user.pseudo}</span>
          </Link>
        </Card.Meta>
        <Card.Header className="experience__title--card" title={title}>{title.length > 50 ? `${title.slice(0, 50)}...` : title}</Card.Header>
        <Card.Description className="experience__preview">{feedback.slice(0, 147)}...</Card.Description>
        <Link onClick={handleClick} to={`/experiences/${id}/${slugTitle}`}>
          <Button
            className="button button__experience__details"
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
