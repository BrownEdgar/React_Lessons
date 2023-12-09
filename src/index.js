import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./Components/Children/App"
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <Router>
      <App />
    </Router>

  )







