import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import UserPage from './components/UserPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div style={{ padding: '50px', fontFamily: 'Arial' }}>
        {this.state.isLoggedIn ? (
          <UserPage onLogout={this.handleLogout} />
        ) : (
          <LoginPage onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;
