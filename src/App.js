import React from 'react';
import Products from './Products.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header"><h1>My React App</h1></header>
        <section>
          <Products ></Products>
        </section>
      </div>
    );
  }
} 

export default App;