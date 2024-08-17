import React from 'react';
import clsx from 'clsx';
import Heading from './components/heading';

import styles from './css-style.module.css';

function CSS() {
  const [auth, setAuth] = React.useState(false);

  const titleStyle = {
    fontSize: 20,
    color: '#f00'
  }

  function onToggleAuth() {
    setAuth(prevState => !prevState)
  }

  return (
    <div>
      <button type="button" onClick={onToggleAuth}>Toggle auth</button>
      <h4 
        id="headingCss" 
        // className="heading text-[40px]"
        // className={auth ? 'text-[40px]' : 'text-[20px]'}
        // className={`heading ${auth ? 'text-[40px]' : 'text-[20px]'}`}
        // className={`heading ${styles.textBold} ${auth ? 'text-[40px]' : 'text-[20px]'}`}
        className={clsx(
          "heading",
          styles.textBold,
          auth ? 'text-[40px]' : 'text-[20px]'
        )}
      >
        CSS
      </h4>
      <div
        style={titleStyle}
      >
        this is css
        <br />
      </div>

      <Heading text="demo with css module" />

    </div>
  )
}

export default CSS