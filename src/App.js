import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './css/App.css';

function Home() {
  return <div>home</div>;
}

function About() {
  return <div>About</div>;
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </main>
      </div>
    );
  }
}

export default App;
