import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          Simple TODO App with React.js (Jun Nguyen)
        </p>
        {/* <MyComponent /> */}
        <ListTodo />
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default App;
