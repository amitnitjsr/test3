import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import logo from './logo.svg';
import selectCity from './component/selectCity/selectCity';
import Details from './component/details/details';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={selectCity} />
        <Route path='/details/:state/:city' component={Details} />
      </div>
    </BrowserRouter>
  );
}

export default App;
