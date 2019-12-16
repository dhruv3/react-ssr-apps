# An Introduction to React Server-Side Rendering

[Source](https://alligator.io/react/server-side-rendering/)

* SSR is a technique for rendering a normally client-side only SPA on the server and then sending a fully rendered page to the client.
* This can help with SEO and with providing meta data to social media channels.

## Creating the React App
* Create Home and add it to App component.

## Hydrate instead of render
* Use ReactDOM’s `hydrate` method instead of `render` to indicate to the DOM renderer that we’re rehydrating the app after a server-side render.
* `render` may change your node if there is a difference between the initial DOM and the current DOM. `hydrate` will only attach event handlers.

## Simple Express Server
* We import our app component from the client app directly from the server.
* We tell Express to serve contents from the `build` directory as static files.
* We use a method from ReactDOMServer, `renderToString`, to render our app to a static HTML string.
* We then read the static `index.html` file from the built client app, inject our app’s static content in the div with a `root` id and send that as the response to the request.

## Configuring webpack & Babel
* For our server code to work, we’ll need to bundle and transpile it, using webpack and Babel.
