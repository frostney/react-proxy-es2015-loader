var loaderUtils = require('loader-utils');

module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
	this.cacheable && this.cacheable();
	var query = loaderUtils.parseQuery(this.query);
	var moduleRequest = "!!" + remainingRequest;

  return `
    import React, { Component } from 'react';

    class ProxyComponent extends Component {
      constructor(props) {
				super(props);

        this.state = {
          component: null
        };
      }

      componentDidMount() {
        require.ensure([], () => {
            this.setState({
              component: require(${loaderUtils.stringifyRequest(this, moduleRequest)}),
            });
					}${(query.name ? ', ' + JSON.stringify(query.name) : '')});
      }

      render() {
        if (this.state.component === null) {
          return null;
        }

        return React.cloneElement(this.state.component, this.props);
      }
    }

    export default ProxyComponent;
  `;
};
