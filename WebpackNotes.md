# Post 1
* [Source](https://medium.com/ag-grid/webpack-tutorial-understanding-how-it-works-f73dfa164f01)
* Webpack is a module bundler. 
  * Maintains order.
  * Creates module.
  * Make a single bundle => a single file is downloaded.
* It takes disparate dependencies, creates modules for them and bundles the entire network up into manageable output files.
* Modules will have a much tighter scope (which is safer). Webpack will pull in the dependant Modules at the right time, in the correct scope.
* The other main feature Webpack offers is bundling. That is, Webpack can pull all of our dependencies into a single file, meaning that only one dependency would need to be downloaded.
