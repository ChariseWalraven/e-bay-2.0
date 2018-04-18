import React, { Component } from 'react';
import logo from './Right Now 182x76.gif';
import ProductList from './components/ProductList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The New Ebay</h1>
        </header>
        <ProductList className="ProductList" />
      </div>
    );
  }
}

export default App;
