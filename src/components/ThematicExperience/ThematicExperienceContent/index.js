// Imports
import './style.scss';
import CardList from './CardList';
import ThematicList from './../../Home/HomeContent/ThematicList';


function ThematicExperienceContent() {
  return (
    <div>
        <h1 className="experiences__content--title">Volunteer's feedbacks</h1>
        <h2 className="experiences__content--subtitle">Thematic</h2>
        <ThematicList />
        <CardList />
    </div>

  );
}

export default ThematicExperienceContent;
