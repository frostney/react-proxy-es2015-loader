import React, { Component } from 'react';

export default class ProxyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: null
    };
  }

  componentDidMount() {
    if (queryName) {
      require.ensure([], () => {
        this.setState({
          component: require(moduleRequest),
        });
      }, JSON.stringify({query: queryName}));
    } else {
      require.ensure([], () => {
        this.setState({
          component: require(moduleRequest),
        });
      });
    }
  }

  render() {
    if (this.state.component === null) {
      return null;
    }

    return React.cloneElement(this.state.component, this.props);
  }
}
