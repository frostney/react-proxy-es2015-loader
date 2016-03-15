var loaderUtils = require('loader-utils');

module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
	this.cacheable && this.cacheable();
	var query = loaderUtils.parseQuery(this.query);
	var moduleRequest = "!!" + remainingRequest;

	//var ProxyComponent = fs.readFileSync('./lib/ProxyComponent.js');
	//console.log(ProxyComponent);

	//ProxyComponent = ProxyComponent.replace(/moduleRequest/, loaderUtils.stringifyRequest(this, moduleRequest));
	//ProxyComponent = ProxyComponent.replace(/queryName/, queryName);

	//console.log(ProxyComponent);

	return '';
};
