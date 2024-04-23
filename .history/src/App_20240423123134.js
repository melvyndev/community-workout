import logo from './logo.svg';
import './App.css';
import { Session } from '@talkjs/react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Session appId="<APP_ID>" userId="sample_user_alice"></Session>;
    </div>
  );
}

export default App;
