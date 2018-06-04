import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import {getUserData} from './services/getUserData'

ReactDOM.render(<App usersData={getUserData()}/>, document.getElementById('root'));
registerServiceWorker();
