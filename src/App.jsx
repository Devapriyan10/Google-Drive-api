import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoogleDrivePicker from './components/GoogleDrivePicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
          <GoogleDrivePicker />
      </div>
    </>
  )
}

export default App
