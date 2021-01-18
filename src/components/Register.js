import React from 'react';
import Header from './Header';

class Register extends React.Component {
  state = {
    pageHeader: 'Register Here'
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

export default Register;
