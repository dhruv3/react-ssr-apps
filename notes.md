# Post 1
* Source: [Getting Started with React SSR](https://blog.jakoblind.no/getting-started-react-ssr/)
* React SSR gives better SEO and a feeling of quicker loading speeds.
* With SSR, the server generates an HTML page. It also **renders the React component** and injects it into the div-tag before sending it to the client.
* Implementing SSR:
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
  
