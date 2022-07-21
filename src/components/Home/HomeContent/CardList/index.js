// Imports
import './style.scss';
import { Card } from 'semantic-ui-react';
import ExperienceCard from './Card';

function CardList() {
  return (
    <div className='experience__list'>
      <ExperienceCard>
      </ExperienceCard>
      <ExperienceCard>
      </ExperienceCard>
      <ExperienceCard>
      </ExperienceCard>
    </div>
  );
}

export default CardList;
