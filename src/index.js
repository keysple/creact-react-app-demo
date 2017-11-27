import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router} from 'react-router'
import './css/index.css';
import App from "./modules/App";
import About from "./modules/about";
import Repos from "./modules/repos";
// import registerServiceWorker from './registerServiceWorker';

//把JSX（JS对象）变成DOM元素，并渲染到页面上。
ReactDOM.render((
<App/>), document.getElementById('root'));
// registerServiceWorker();
