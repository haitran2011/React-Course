import React from 'react';
import clsx from 'clsx';
import Heading from './components/heading';
import Title from './components/title';
import styles from './css-style.module.css';
import Button from './components/button';

/*
css-in-js
- styled component (popular)
- emotion react
*/


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
      <br />

      <Title text="this is style component" />
        
      <div
        style={titleStyle}
      >
        this is css
        <br />
      </div>

      <Heading text="demo with css module" />


      <Title isBold={false} text="lorerm lorerm lorem" />
      
      <Button text="demo button with styled component" />

      <Button text="button2" isGradient textColor="#fff" />
      <Button 
        text="button3" 
        border="1px solid #000" 
        textColor="#f00"
        borderRadius="20px"
      />

    </div>
  )
}

export default CSS