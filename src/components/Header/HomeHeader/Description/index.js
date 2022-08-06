// == Import
import './style.scss';

// Composant qui gère l'affichage de la description
// Spécifique à la page Home & volunteer
function Description() {
  return (
    <div className="Description">
      <h1 className='Description__title'>
        Meet volunteers from all around the world
      </h1>
      <h2 className='Description__subtitle'>
        Share your experiences and discover feedbacks of volunteers on many differents projects
      </h2>
    </div>
  );
}

// == Export
export default Description;
