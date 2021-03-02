import logo from './images/logo.svg';
import './App.css';
import earthrise_bkg from './images/earthrise_apollo8_bkgd.jpg';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        {/*<img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Earthrise
        </p>
        <a
          className="App-link"
          href="https://earthshotprize.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        {/*<Link to="/bitcoin">Look at Bitcoin Page</Link> */}
        {/*<Link to="/koalabear">At Home</Link> */}
        <ul className="Menu">
          <li><a className="Menulinks" href="/about">About</a></li>
          <li><a className="Menulinks" href="https://earthshotprize.org/">Earthshot Prize</a></li>
          <li><a className="Menulinks" href="/bitcoin">Inspiration</a></li>
          <li><a className="Menulinks" href="/koalabear">Action</a></li>
        </ul>
      </header>

    </div>
  );
}

export default App;
