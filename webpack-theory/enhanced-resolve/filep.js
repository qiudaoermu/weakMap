const fs = require("fs");
const { CachedInputFileSystem, ResolverFactory } = require("enhanced-resolve");

// create a resolver
const myResolver = ResolverFactory.createResolver({
	// Typical usage will consume the `fs` + `CachedInputFileSystem`, which wraps Node.js `fs` to add caching.
	fileSystem: new CachedInputFileSystem(fs, 4000),
	/* any other resolver options here. Options/defaults can be seen below */
});

// resolve a file with the new resolver
const context = {};
const resolveContext = {};
const lookupStartPath = "/Users/webpack/some/root/dir";
const request = "../vue.runtime.common.dev";
myResolver.resolve({}, './node_modules/vue/dist', request, resolveContext, (
	err /*Error*/,
	filepath /*string*/
) => {
	console.log(err)
	console.log(filepath)
	// Do something with the path
});