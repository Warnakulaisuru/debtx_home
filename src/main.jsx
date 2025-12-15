import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SnowCanvas from "./components/SnowCanvas";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnowCanvas />
    <App />
  </React.StrictMode>,
)
