// Imports
import './style.scss';
import { useSelector } from 'react-redux';
import ThematicButton from './ThematicButton';

function ThematicList() {
  const thematicList = useSelector((state) => state.thematic.thematicList);
  // console.log(thematicList);

  return (
    <div>

      <ul className="thematic__list">
        {
          thematicList.map((thematic) => (
            <ThematicButton
              key={thematic.id}
              {...thematic}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default ThematicList;
