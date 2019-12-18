# Post 1
* [Source](https://medium.com/ag-grid/webpack-tutorial-understanding-how-it-works-f73dfa164f01)
* Webpack is a module bundler. 
  * Maintains order.
  * Creates module.
  * Make a single bundle => a single file is downloaded.
* It takes disparate dependencies, creates modules for them and bundles the entire network up into manageable output files.
* Modules will have a much tighter scope (which is safer). Webpack will pull in the dependant Modules at the right time, in the correct scope.
* The other main feature Webpack offers is bundling. That is, Webpack can pull all of our dependencies into a single file, meaning that only one dependency would need to be downloaded.
## Webpack - Initial Config
```js
var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/),
        filename: 'bundle.js'
    }
}
```
* We need to tell Webpack what our `application entry point` is and what the `resulting output` should be.
* `entry`: This is the main entry point of our application. This is where our initial loading and application logic will be. Webpack uses this as a starting point for its dependency tree walking. It will build up a dependency graph and create modules as necessary.
* `output.path`: An absolute path for the resulting bundle. To make this cross platform and easy to use, we use a built-in Node.js function (path). This will help us to dynamically create an absolute path, relative to where we are.
* `output.filename`: The filename of the resulting bundle. This can be anything, but by convention it's called 'bundle.js'
* Webpack wraps each of our files into a module and passes them into the Webpack bootstrap as an array of Modules.
## Loaders — Making Webpack Smarter
* We sometimes need to pre-process other languages into JavaScript ES5 — the version that Webpack can understand.
* `Loaders` are how Webpack can process content other than JavaScript.
* Use `Babel` to transpile our ES2015 to ES5 code.
* In order to use Babel, we need to use the `Babel Loader`. With Loaders we can get Webpack to process many types of files — CSS, Images, TypeScript and ES2015 code and so on.
* We need 3 Babel dependencies in order to use it with Webpack:
  * `babel-loader`: The interface between Babel and Webpack
  * `babel-core`: Understands how to read & parse code, and generate corresponding output
  * `babel-preset-es2015`: Rules for Babel on how to process ES2015 code and convert it into ES5
```js
module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
```
* `test`: We need to tell the Loader that we only want it to process JavaScript files. So we provide a regex expression that will match .js files
* `loader`: The loader to use - in this case the Babel Loader
* `exclude`: We don't want Babel to process any files under node_modules
* `query.presets`: We're looking for Babel to convert ES2015 code
## Making Webpack Look Good — CSS & Styling
* CSS is not scoped to the module and it is imported.
### Importing CSS #1: This will add CSS to index.html inside style tag
* In your `index.js` write `import './math_output.css';`
```js
{
   test: /\.css$/,
   loaders: ['style-loader', 'css-loader']
}
```

* We need to Loaders to process our CSS:
  * `css-loader`: Knows how to process CSS imports - takes the imported CSS and loads the file contents
  * `style-loader`: Takes CSS data(from imports) and adds them to the HTML document
* **NOTE:** Webpack processes Loaders from right to left, so the results of `css-loader` (the file contents) are passed to `style-loader` (adding the styles to the HTML document).
### Importing CSS #2: CSS gets added to a new CSS file(style.css)
* We can split the CSS in `cache busting` (files with unique hashes) and then include these files into our resulting bundle.
```js
const ExtractTextPlugin = require('extract-text-webpack-plugin');
{
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('css-loader')
}
plugins: [
    new ExtractTextPlugin('style.css')
]
```
* To pass the results off the css-loader to the ExtractTextPlugin.
* What this does is tell the plugin that for all data passed to it, save it down to a file called style.css.
## Webpack and Images
* Loaders required:
  * `image-webpack-loader`: will try to automatically compress large images for us
  * `url-loader`: will inline the results from `image-webpack-loader` if the results are small, and include the image in the output directory if they are large
```js
{
  test: /\.png$/,
  loaders: [
      'url-loader?limit=5000',
      'image-webpack-loader'
  ]
}
```
# Future Webapck Readings:
* https://survivejs.com/webpack/what-is-webpack/
* [FCC 1 hour video](https://www.youtube.com/watch?v=gEBUU6QfVzk)
