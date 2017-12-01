import React, {Component} from 'react';
import  {Link} from 'react-router-dom'
import logo from '../logo.svg';
import '../css/App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
<ul>
    <li><Link to="/about" className="App-title">About</Link></li>
    <li><Link to="/repos" className="App-title">Repos</Link></li>
</ul>
      </div>
    );
  }
}

export default App;
