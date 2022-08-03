import React from 'react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

function Arrow({
  children,
  disabled,
  onClick,
}) {
  return (
    <button
      type="button"
      className="arrow"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      &#60;
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      &#62;
    </Arrow>
  );
}
