import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5, // Start with 5 to match screenshot
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      this.sayHello();
    });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert('Hello! Member1');
  };

  sayWelcome = (msg) => {
    alert(`Hello! ${msg}`);
  };

  handleClick = (e) => {
    e.preventDefault(); // Synthetic event example
    alert('I was clicked');
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>{this.state.count}</h1>

        <button onClick={this.increment}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />

        <button onClick={() => this.sayWelcome('Member1')}>Say welcome</button>
        <br /><br />

        <button onClick={this.handleClick}>Click on me</button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
