import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Notification from './components/Notification'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((currentCount) => currentCount + 1)
    Notification.success('Number increased successfully!')
  }

  const decrement = () => {
    if (count > 0) {
      setCount((currentCount) => currentCount - 1)
      Notification.error('Number decreased!')
    }
  }

  return (
    <>
      <h1>{count}</h1>
      <h3>Counter</h3>
      <p>Click the button to show a notification.</p>

      <div className="card">
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Minus</button>
      </div>

      <ToastContainer position="top-right" autoClose={1000} />
    </>
  )
}

export default App