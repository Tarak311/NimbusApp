import React from 'react';
import Header from './Header';

class Login extends React.Component {
  state = {
    pageHeader: 'Login Here'
  };
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          ...
        </div>
      </div>
    );
  }
}

export default Login;
