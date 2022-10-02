import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/React_HOOKS/useCallback/App"
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'));

serviceWorker.unregister();




