// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Sends message in console to ensure that the app.js is running
console.log('App.js is running!');

ReactDOM.render(<AppRouter />, document.getElementById('app'));

