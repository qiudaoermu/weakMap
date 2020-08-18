
module.exports = function (source,sourceMaps) {
	console.log('进入comment-require-loader')
	this.callback(null, source, sourceMaps);
	return
};