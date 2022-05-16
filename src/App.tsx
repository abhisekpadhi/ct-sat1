import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import { set } from "cookie-toss";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    set({
      // This is the URL at which you've hosted the output of `createIframe`, above:
      iframeUrl: 'https://tosshub.netlify.app/',
      dataKey: 'chocolate-chip-oatmeal',
      data: {
        c: 'is for localStorage',
        and: 'that\'s good enough for me.'
      }
    }).then(res => {
      console.log(`set res: ${JSON.stringify(res)}`);
    }).catch(err => {
      console.log(`set err: ${JSON.stringify(err)}`);
    });
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
