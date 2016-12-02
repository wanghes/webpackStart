var path = require("path");
module.exports = {
    entry: {
    	main:'./src/main.js',
    	admin:'./src/admin.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
  	module: {
	  	loaders: [
	    	{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
	  	]
	}
};