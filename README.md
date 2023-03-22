# Example of bundling webR and R wasm binaries using webpack

This repo contains an example configuration for bundling webR as part of a wider JavaScript application using webpack. In addition to bundling the webR JavaScript loader, webpack has been configured to also copy the required R wasm binaries, distributed as part of the `@r-wasm/webr` npm package, to the output directory.

By default, webR will download R wasm binaries from CDN. However, in this example webR is instead configured, using the optional `baseUrl` and `serviceWorkerUrl` settings at initialisation, so that the R wasm binaries and R worker scripts are downloaded from the served output directory, rather than from CDN.

## Building the example application (Linux/macOS)

* Clone this repo and `cd` into the new directory.
* Install the required JavaScript libraries: `npm install`.
* Build the application using webpack: `npm run build` or `npx webpack`.
* Serve the application: `npm run serve` or `npx serve dist`.

Once the application has been build and is being served it can be accessed at the URL https://localhost:3000.

## Relevant files and directories

* `src/index.html` - Example HTML template.
* `src/index.js` - Example JavaScript source. WebR is initialised in this file.
* `webpack.config.js` - Webpack configuration.
* `dist` - Webpack output directory.
