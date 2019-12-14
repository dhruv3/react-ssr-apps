# Post 1
* Source: [Getting Started with React SSR](https://blog.jakoblind.no/getting-started-react-ssr/)
* React SSR gives better SEO and a feeling of quicker loading speeds.
* With SSR, the server generates an HTML page. It also **renders the React component** and injects it into the div-tag before sending it to the client.
## Implementing SSR:
  * Transpile the server code:
    * Your server will need to understand JSX code, just like your client does.
    * Transpile your whole backend code using either Babel only(babel-cli) or Babel with webpack(https://blog.jakoblind.no/ssr-webpack-bundle/).
  * Render to String:
    * When rendering on the server, you will use function called `renderToString`.
    * It takes a React root component as input, and outputs a String with HTML.
    ```js
    const reactHtml = ReactDOMServer.renderToString(<App />);
    ```
  * Inject the generated HTML on your server-side rendered page
  * Make sure you don’t reference window or document
  
# Post 2
* Source: [Demystifying server-side rendering in React](https://www.freecodecamp.org/news/demystifying-reacts-server-side-render-de335d408fe4/)
* SSR is the ability of a front-end framework to render markup while running on a back-end system.
* Idea is to render your app on the server initially, then to leverage the capabilities of SPAs on the client.
* Crawlers will now see your website as any other static site on the web and will **index all the content** you render on the server.
## Basic Setup
* In order to use SSR, we need a server! 
* We're starting the server with the `index.js` file which is in the root folder. This file loads the babel-register and sets up the babel plugins needed to run JSX and ESModules on the server.
* The node server needs to handle the static files from the `dist` folder.
* The entry point of the bundle is called `client.js` because it's the only part of our application that is not used for the server render.
* JSX and ES Modules work inside `server.js`.
* `ReactDOM.hydrate`: This function will use the server-rendered React app and will attach event handlers.

# Post 3
* Source: [Intro to SSR](https://alligator.io/react/server-side-rendering/)
