import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <script>document.documentElement.classList.add('js')</script>
    <App />
    <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
  </React.StrictMode>
)
