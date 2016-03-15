import React, { Component } from 'react';

import A from './A';
import B from 'react-proxy-es2015!./B';


class App extends Component {
  render() {
    return (
      <div>
        <A />
        <B />
      </div>
    );
  }
}

React.render(<App />, document.body);
