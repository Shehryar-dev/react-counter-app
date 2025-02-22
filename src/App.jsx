import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert("You can't go beyond 20");
      setCount(count + 0);
    }
  }

  const subtractCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You can't go below 0");
      setCount(count - 0);
    }
  }


  return (
    <>
      <h1>React Counter App</h1>
      <h1>Your Count is: {count}</h1>

      <div className="card" style={{ width: '18rem', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={addCount} style={{ marginLeft: '10px', borderRadius: '10px',background:'#3B6790',color:'white',}}>
          Increament
        </button>
        <button onClick={subtractCount} style={{ marginLeft: '10px', borderRadius: '10px',background:'#3B6790',color:'white',}}> 
          Decreament
        </button><br /><br />

      </div>
    </>
  )
}

export default App
