import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterContextProvider } from './contexts/CounterContext';
import './styles/global-styles.css';

import { Home } from './templates/Home/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
)
