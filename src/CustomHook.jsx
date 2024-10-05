import React from 'react';
import useResizeWindow from './hooks/use-resize-window';

function CustomHook() {
  const { isSmallScreen } = useResizeWindow();
  return (
    <div>
      <h1>CustomHook</h1>
      Screen:  {isSmallScreen ? 'small' : 'large'}
    </div>
  )
}

export default CustomHook