import React, { Component } from 'react';
import Header from './components/header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <a href="/tv-search-react">TV series search</a>
          </h1>
        </header>
        <div style={{ paddingTop: 20 }}>
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
