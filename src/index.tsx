import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { DarkModeTheme } from './components/DarkModeTheme'
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoadingState from './components/LoadingState';

ReactDOM.render(
  <React.StrictMode>
      <DarkModeTheme>
      <React.Suspense fallback={<LoadingState />}><App /></React.Suspense>
      </DarkModeTheme>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
