import React, { useEffect } from 'react';
import './App.css';

const p = <div className='box present'></div>
const b = <div className='box blank'></div>
const App: React.FC = () => {
  const [num, setNum] = React.useState<number>(0)
  const [passedSec, setPassedSec] = React.useState<number>(0);
  const [rows, setRows] = React.useState<JSX.Element[][]>([
    [b,p,p],
    [p,p,p],
    [p,p,p],
    [p,p,p],
  ])

  const timerStart = () => {
    let sec = 0;
    setInterval(() => {
      sec += 1;
      setPassedSec(sec)
    }, 1000)
  }

  useEffect(() => {
    setNum(prev => prev++)
  }, [passedSec])

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
