// Imports
import './style.scss';
import ThematicButton from './ThematicButton';
import { useDispatch, useSelector } from 'react-redux';

function ThematicList() {

  const thematicList = useSelector((state) => state.thematic.thematicList);
  // console.log(thematicList);
  return (
    <div>
      <ul className='thematic__list'>
        {
          thematicList.map((thematic) => (
            <ThematicButton key={thematic.id} {...thematic}/>
            )
          )
        }
      </ul>
    </div>
  );
}

export default ThematicList;
