// Imports
import './style.scss';
import { useSelector } from 'react-redux';
import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import ThematicButton from './ThematicButton';
import useDrag from './Utils/useDrag';
import { LeftArrow, RightArrow } from './Utils/arrows';
import { onWheel, usePreventBodyScroll } from './Utils/onWheel';

function ThematicList() {
  const thematicList = useSelector((state) => state.thematic.thematicList);

  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = React.useState([]);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  // NOTE: for drag by mouse
  const {
    dragStart, dragStop, dragMove,
  } = useDrag();
  const handleDrag = ({ scrollContainer }) => (ev) => dragMove(ev, (posDiff) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += posDiff;
    }
  });

  return (
    <div
      onMouseEnter={disableScroll}
      onMouseLeave={[enableScroll, dragStop]}
    >
      <ScrollMenu
        className="thematic__list"
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
      >
        {thematicList.map(({ id, name, slugName }) => (
          <ThematicButton
            itemId={id} // NOTE: itemId is required for track items
            title={id}
            key={id}
            id={id}
            name={name}
            slugName={slugName}
            selected={isItemSelected(id)}
          />
        ))}
      </ScrollMenu>

    </div>
  );
}

export default ThematicList;
