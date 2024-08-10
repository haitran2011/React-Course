import React from 'react';
import Button from './components/button';

/* how many ways component re-render?
- state change
- props change
- parent component re-render
- force update (key change) (trick)
*/
// list -> A, B, C -> jsx -> A(1), B(2), C(3)
// user click delete C(3)

function Typhography({ text }) {
  console.log('Typhography re-render')
  return (
    <div>this is Typhography: {text}</div>
  )
}

function Component() {
  const [count, setCount] = React.useState(0)
  const [text, setText] = React.useState('');
  const [timstamp, setTimestamp] = React.useState(Date.now());

  console.log('Parent Component re-render') 
  return (
    <div>
      <h3>Component</h3>
      <Button 
        text="State Change" 
        onClick={() => {
          setCount(prevState => prevState + 1);
        }}    
      />
      <Button 
        text="Props Change" 
        onClick={() => {
          setText(`Viet ${Date.now()}`);
        }}    
      />
       <Button 
        text="Force Update" 
        onClick={() => {
          setTimestamp(`Viet ${Date.now()}`);
        }}    
      />

      <Typhography text={text} key={timstamp} /> 
    </div>
  )
}

export default Component