var envData      = require('../testData/json/envData.json');
var runInfo      = require('../config/runInfo');

exports.getEnvData = function (key) {
	var env = runInfo.env;
	return envData[key][env.toUpperCase()];
}