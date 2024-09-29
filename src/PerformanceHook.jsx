import React from 'react';
// import Card from './components/card';

/*
memo
- prevent component re-render unnecssary
*/

function Card() {
  console.log("Card Hooks")
  return (
    <div>this is card</div>
  )
}
const CardMemo = React.memo(Card);
// const CardMemo = React.memo(Card, customEquality);
// function customEquality(prevProps, nextProps) {
//   return prevProps.title === nextProps.title
// }

function PerformanceHook() {
  const [timestamp, setTimestamp] = React.useState(Date.now());
  const [card, setCard] = React.useState({
    title: '',
    releaseDate: ''
  })

  function handleUpdateCard() {
    setCard(prevState => ({
      ...prevState,
      title: 'title'
    }))
  }

  console.log("------------------")
  console.log("Performance Hooks", card)

  return (
    <div>
      <h1>PerformanceHook</h1>
      Show timestamp: {timestamp}
      <button type="button" onClick={() => setTimestamp(Date.now())}>Update timestamp</button>
      <button type="button" onClick={handleUpdateCard}>Update card</button>

      <CardMemo card={card} />
    </div>
  )
}

export default PerformanceHook