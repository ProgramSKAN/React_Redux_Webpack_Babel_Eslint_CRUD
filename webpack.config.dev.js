const webpack = require("webpack"); //here, using Node's CommonJs syntax since Node doesn't support ES modules yet.Alternatively, you could also use Babel-node to transpile your code to node.
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//declare Node Environment
process.env.NODE_ENV = "development"; //this is required for Babel plugin

//To configure webpack , export a Javascript object.
module.exports = {
  //its CommonJs syntax to export since we working on Node.ES Modules used in React.

  mode: "development", //wepack runs in development mode.this sets Node enviroment to development and disables some production only features.
  target: "web", //target:'node' if you use webpack to build an app running in node.that would change the way webpack bundles code so that 'node' could work with it instead of browser.
  devtool: "cheap-module-source-map", //there are may devtools but this is recommended for development, so that you get source map for debugging.(Source Maps lets us see our original code when debugging in browser.because you are going to transpile code with Babel.)
  entry: "./src/index", //App entry point.omit '.js'
  output: {
    //where you want the webpack to output?
    //Note: Webpack doesn't output code in development mode.It serves our app from Memory.But still you have to declare this path so that it knows where it's serving from memory.
    path: path.resolve(__dirname, "build"), //__dirname=current directory name. //Although its not actually going to write a file to "build". in memory it will be serving from this directory.
    publicPath: "/", //it specifies, the public URL of the output directory when its referenced in the browser.
    filename: "bundle.js", //filename for the bundle. Note:A physical file won't be generated for development, but webpack requires this value so that our HTML can reference the Bundle that's being served from the memory.
  },
  devServer: {
    //we use Webpack to serve our app in development too.so we have to configure devServer.
    //you could choose to serve your app using any Node-Based Webserver like Express too.
    stats: "minimal", //this reduces the information that it writes to the command line.
    overlay: true, //this tells it to overlay any errors that occur in the browser.
    historyApiFallback: true, //this means all requests will be sent to index.html. This way you can load deep links and they'll all be handled by React-Router.

    //this below 3 lines are mandatory due to an open issue in webpack when using latest version of chrome.
    //can be removed after its resolved
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", //tell the plugin where to fine HTML Template
      favicon: "src/favicon.ico",
    }),
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3001"),
    }),
  ],
  module: {
    //tell webpack what files you want to handle by declaring rules array.
    rules: [
      {
        test: /\.(js|jsx)$/, //look for .js or .jsx files
        exclude: /node_modules/, //tell it to ignore node modules, since we don't need webapck to process any files in node_modules.
        use: [
          //'use' property is to tell webpack what to do with .js/.jsx files
          "babel-loader", //you want to run Babel on these files.This will run "Babel" on all of javascript and webpack will bundle that up for us.
          "eslint-loader", //webpack will watch files, recompile your code and run ESLint when you hit save.
          //order matters, "eslint-loader" runs first the "babel-loader" runs.
        ],
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"], //combination of both loader will allow you to import css just like javascript, and webpack will bundle all of your css into a single file.
      },
    ],
  },
};
