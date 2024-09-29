import React from 'react'
import Button from './components/button';

/*
- keep value during component re-render
- can contain any valid javascript value
*/
// let number = 1;

function Ref() {
  const [timestamp, setTimestamp] = React.useState(Date.now());
  const numberRef = React.useRef(1);
  const firstNameRef = React.useRef(null);
  const boxChatRef = React.useRef(null);
  const skipFirstRender = React.useRef(true);
  const buttonRef = React.useRef(null);

  // first render: component -> render UI -> not call api useEffect
  // next re-render: component -> render UI -> call api useEffect
  React.useEffect(() => {
    if(skipFirstRender.current) {
      skipFirstRender.current = false;
      return;
    };
    console.log('call api background job')
  }, [skipFirstRender.current])

  function handleForce() {
    setTimestamp(Date.now())
    numberRef.current = numberRef.current + 10;
    firstNameRef.current.focus();
    firstNameRef.current.setSelectionRange(0, firstNameRef.current.value.length)
    boxChatRef.current.scrollIntoView();
    buttonRef.current.style.backgroundColor = '#f00'
  }

  return (
    <div>
      <h1>Ref</h1>

      <div>this is ref</div> <br />
      Number: {numberRef.current} <br />
      <input type="text" ref={firstNameRef} defaultValue="tony" />

      <button type="button" onClick={handleForce}>Force Update</button>

      <div className="boxChat" >
        <div className='boxChat_comment'>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry
        </div>
        <div ref={boxChatRef}></div>
      </div>

      <h3>forwardRef</h3>
      <Button text="Forward ref" ref={buttonRef} />
    </div>
  )
}

export default Ref