// Imports
import './style.scss';
import CardList from './CardList';
import ThematicList from './ThematicList';
import AuthorList from './AuthorList';

function HomeContent() {
  return (
    <div className="content__page__all content__page__home">
      <div />
      <h1 className="home__content__title main__title">Volunteer's feedbacks</h1>
      <ThematicList />
      <CardList />
      <AuthorList />
      <CardList />
    </div>
  );
}

export default HomeContent;
