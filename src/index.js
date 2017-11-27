import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import './css/index.css';
import App from "./modules/App";
import About from "./modules/about";
import Repos from "./modules/repos";
//把JSX（JS对象）变成DOM元素，并渲染到页面上。
ReactDOM.render((
    <Router>
        <div>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}/>
        </div>
    </Router>
), document.getElementById('root'));
// registerServiceWorker();
