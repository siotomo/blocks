import React from 'react';
import './App.css';

const p = <div className='box present'></div>
const b = <div className='box blank'></div>
const App: React.FC = () => {
  const [rows, setRows] = React.useState<JSX.Element[][]>([
    [b,p,p],
    [p,p,p],
    [p,p,p],
    [p,p,p],
  ])
  
  // 全然思ったように動かない...
  React.useEffect(() => {
    setInterval(()=>{
      let prevRow: JSX.Element[];
      const newRows = rows.map((row, i) => {
        if(i === 0){
          prevRow = row
          return [b,b,b]
        }else{
          const tmp = prevRow
          prevRow = row
          return tmp
        }
      })
      setRows(newRows)
    },1000)
  },[rows,setRows])

  return(
    <div id='board'>
      {rows.map((row, i) => (
        <div className='row' key={i}>
          {row.map((box, j) => (
            <div key={j}>{box}</div>
          ))}
        </div>
      ))}
      {/* <div className='row'>
        {p}{b}{b}
      </div>
      <div className='row'>
        {b}{b}{b}
      </div>
      <div className='row'>
        {b}{b}{b}
      </div>
      <div className='row'>
        {b}{b}{b}
      </div> */}
    </div>
  )
}

export default App;
