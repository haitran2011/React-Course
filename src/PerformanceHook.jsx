import React from 'react';
import useResizeWindow from './hooks/use-resize-window';
// import Card from './components/card';

/*
memo
- prevent component re-render unnecssary

useCallback
- return a memorize callback function
- recommend use useCallback along with memo

useMemo
- Returns  a memorized value.
- During initial rendering, useMemo(compute, dependencies) invokes compute, memoizes the calculation result, and returns it to the component.

*/

function Card({ score, updateScore }) {
  console.log("Card Hooks")
  return (
    <div>this is card score: {score} <button type="button" onClick={updateScore}>test usecallbakc</button></div>
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
  });
  const [score, setScore] = React.useState(1);
  const { isSmallScreen } = useResizeWindow();

  function handleUpdateCard() {
    setCard(prevState => ({
      ...prevState,
      title: 'title'
    }))
  }

  // callback  memory A
  const updateScore = React.useCallback(() => {
    setScore(score + 1)
  }, [score]);

  const fullScore = React.useMemo(() => {
    console.log('useMemo fullScore')
    return score === 10;
  }, [score])

  console.log("------------------")
  console.log("Performance Hooks", card)

  return (
    <div>
      <h1>PerformanceHook</h1>
      Show timestamp: {timestamp} <br />
      Full Score: {fullScore ? 'true' : 'false' } <br />
      <button type="button" onClick={() => setTimestamp(Date.now())}>Update timestamp</button>
      <button type="button" onClick={() => setScore(prevState => prevState + 1)}>Update Score</button>
      <button type="button" onClick={handleUpdateCard}>Update card</button>

      <CardMemo card={card} score={score} updateScore={updateScore} />

      <br />
      Screen:  {isSmallScreen ? 'small' : 'large'}
    </div>
  )
}

export default PerformanceHook