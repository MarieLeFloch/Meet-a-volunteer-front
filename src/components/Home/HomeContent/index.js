// Imports
import CardList from './CardList';
import ThematicList from './ThematicList';
import AuthorList from './AuthorList';
import './style.scss';

function HomeContent() {
  return (
    <div className='home__content'>
      <CardList />
      <ThematicList />
      <AuthorList />
    </div>
  );
}

export default HomeContent;