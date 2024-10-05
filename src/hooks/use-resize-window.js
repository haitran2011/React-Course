import React from 'react';

export default function useResizeWindow() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  function onResize() {
    setIsSmallScreen(window.innerWidth < 768)
  }

  React.useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      // clean up function
      window.removeEventListener('resize', onResize);
    }
  }, [])

  return {
    isSmallScreen
  }
}