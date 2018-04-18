import React, { Component } from 'react';
import logo from './Right Now 182x76.gif';
import ProductList from './components/ProductList'
import Details from './components/Details'
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The New Ebay</h1>
        </header>
        <Router>
          <div>
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/:id" component={Details} />
            <Route exact path="/" render={() => <Redirect to="/products" /> } />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
