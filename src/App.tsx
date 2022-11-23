import React from 'react';
import './App.css';

const p = <div className='box present'></div>
const b = <div className='box blank'></div>
const App: React.FC = () => {
  const [num, setNum] = React.useState<number>(1);
  const [rows, setRows] = React.useState<JSX.Element[][]>([
    [b,p,p],
    [p,p,p],
    [p,p,p],
    [p,p,p],
  ])


  const plusAndDisplayNum = React.useCallback(() => {
    console.log(num);
    setNum(num+1);
  },[num, setNum])

  const timerStart = () => {
    setInterval(() => {
      plusAndDisplayNum()
    }, 1000)
  }

  return(
    <div>
      <button onClick={timerStart}>start</button>
      <div id='board'>
        {rows.map((row, i) => (
          <div className='row' key={i}>
            {row.map((box, j) => (
              <div key={j}>{box}</div>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
