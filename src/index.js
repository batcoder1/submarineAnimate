import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Submarino from './components/submarino/Submarino';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Submarino />, document.getElementById('root'));
registerServiceWorker();
