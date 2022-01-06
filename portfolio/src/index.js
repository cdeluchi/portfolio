import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './main';
import About from './about';
import Portfolio from './portfolio';
import Todo from './todo';
import Contact from './contact';
// import Work from './work';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Main />
    <About />
    <Portfolio />
    <Todo />
    <Contact />
    {/* <Work />  */}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
