import React, { useEffect } from 'react';
import './App.css';

const p = <div className='box present'></div>
const b = <div className='box blank'></div>
const App: React.FC = () => {
  const [num, setNum] = React.useState<number>(0) //正しく動いているかの確認用
  const [passedSec, setPassedSec] = React.useState<number>(0);
  const [rows, setRows] = React.useState<JSX.Element[][]>([
    [p,b,b,b,b,b,],
    [b,b,b,b,b,b,],
    [b,b,b,b,b,b,],
    [b,b,b,p,b,b,],
  ])

  const timerStart = () => {
    let sec = 0;
    setInterval(() => {
      sec += 5;
      setPassedSec(sec)
    }, 5000)
  }
  const moveRight = React.useCallback(() => {
    const newRows = rows.map((row) => {
      row.forEach((cell, i) => {
        const leftCell = row[row.length - 2 - i]
        if(!leftCell){
          row[i] = b;
        }else{
          if(cell === p){
            return;
          }else if(leftCell === p){
            row[i] = p
            row[i-1] = b
          }else{
            row[i] = b
          }
        }
      })
      return row
    })
    setRows(newRows)
  },[rows, setRows])

  useEffect(() => {
    setNum(prev => prev++);
    // moveRight();
  }, [passedSec, moveRight])

  return(
    <div>
      <button onClick={timerStart}>start</button>
      {!!passedSec && (
        <div>経過時間{passedSec}秒</div>
      )}
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
