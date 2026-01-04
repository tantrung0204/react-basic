import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

/**
 * 2 components: class component / function component (function, arrow)
 *  function: function name() {}
 *  arrow: const name = () => {}
 * 
 * Component là một class hay function có chức năng đặc biệt là render HTML, sử dụng JSX (JavaScript XML)
 * JSX: function của javascript trả về html, code html trong javascript
 * */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
