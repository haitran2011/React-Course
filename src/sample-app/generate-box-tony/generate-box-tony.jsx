import React from 'react';
import BoxItem from './box-item';

/*
[
  { id: 1, name: 'Box 1', bgColor: 'red' },
  { id: 2, name: 'Box 2', bgColor: 'red' },
]

*/

function GenerateBoxTony() {
  // state
  const [numbers, setNumbers] = React.useState(0);
  const [boxes, setBoxes] = React.useState([]);

  // action
  function onChangeNumber(event) {
    setNumbers(event.target.value)
  }

  function handleGenerate() {
    const boxes = Array.from({ length: numbers }, (_, index) => ({
      id: index + 1,
      name: `Box ${index + 1}`,
      bgColor: '#fff'
    }))
    setBoxes(boxes);
  }

  // function handleUpdateBgColor(boxId) {
  //   // find index in array
  //   // update object of index
  //   const index = boxes.findIndex(box => box.id === boxId);
  //   if(index === -1) return;
  //   const newBoxes = [...boxes];
    
  //   // newBoxes[index].bgColor = `#${randomColor()}`; // template strings
  //   newBoxes[index].bgColor = '#' + randomColor();
  //   setBoxes(newBoxes);
  // }

  console.log('GenerateBoxTony: render')

  // UI
  return (
    <div>
      <h4 className='text-[30px]'>Sample App: GenerateBoxTony</h4>
      {/* TODO: code logic */}
      <div className="generateBox_form">
        <div>Number of boxes: </div>
        <div><input className='generateBox_input' type="text" onChange={onChangeNumber} /></div>
        <div><button type="button" onClick={handleGenerate}>Generate</button></div>
      </div>

      <div className="generate_box_container">
        {boxes.map(box => (
          <BoxItem key={box.id} box={box}  />
        ))}
        {/* <div className="generate_box">Box 2</div>
        <div className="generate_box">Box 3</div> */}
      </div>
    </div>
  )
}

export default GenerateBoxTony