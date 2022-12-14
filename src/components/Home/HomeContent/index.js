// Imports
import CardList from './CardList';
import ThematicList from './ThematicList';
import AuthorList from './AuthorList';
import './style.scss';

function HomeContent() {
  return (
    <div className="home__content">
      <div />
      <h1 className="experiences__content--title">Some volunteer's feedbacks</h1>
      <ThematicList />
      <CardList />
      <AuthorList />
      <CardList />
      <CardList />
    </div>
  );
}

export default HomeContent;
