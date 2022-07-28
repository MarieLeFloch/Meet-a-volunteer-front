// Imports
import './style.scss';
import { Card, Image, Button } from 'semantic-ui-react';
import ImageTest from '../../../../../assets/image/1.jpg';
import UserImageDefault from '../../../../../assets/image/user-default.png';

function ExperienceCard() {
  return (
    <div>TEST</div>
  );
 }


// function ExperienceCard({country, feedback, picture, title, user, createdAt}) {
//   console.log(country );
//   return (
//     <Card className="experience__card">
//       <Image src={ImageTest} wrapped ui={false} />
//       <Image className="user__image" src={UserImageDefault} size="tiny" />
//       <Card.Content>
//         <Card.Meta>
//           <span className="experience__country">{country}</span>
//         </Card.Meta>
//         <Card.Meta>
//           <span className="author__name">{user.pseudo}</span>
//         </Card.Meta>
//         <Card.Header className="experience__title">{title}</Card.Header>
//         <Card.Description className="experience__preview">
//           Soufflé cake chocolate oat cake powder icing pie brownie powder. Donut fruitcake jelly-o ...
//         </Card.Description>
//         <Button
//           className="button__experience__details"
//         >
//           See more
//         </Button>
//       </Card.Content>
//       <Card.Content extra>
//         <Card.Meta>
//           <span className="uploaded__date">Uploaded the {createdAt}</span>
//         </Card.Meta>
//       </Card.Content>
//     </Card>
//   );
// }

export default ExperienceCard;
