import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import MyComponent from './Example/MyComponent'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import ListUser from './Users/ListUser';

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
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />


          {/* <MyComponent /> */}
          {/* <ListTodo /> */}

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todos' element={<ListTodo />} />
            <Route path='/about' element={<MyComponent />} />
            <Route path='/user' element={<ListUser />} />
          </Routes>
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
    </Router>
  );
}

export default App;
