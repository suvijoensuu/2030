import logo from './logo.svg';
import './App.css';
import earthrise from './earthrise_apollo8.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={earthrise} className="App-logo" alt="logo" />
        <p>
          Earthrise
        </p>
        <a
          className="App-link"
          href="https://earthshotprize.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By 2030
        </a>
      </header>
    </div>
  );
}

export default App;
