# eventsManager

A React + Redux web app that lists upcoming music events for a chosen city using the [Ticketmaster Discovery API](https://developer.ticketmaster.com/). The user picks a city from a dropdown and the app fetches and renders the matching concerts in a Material UI table with direct booking links.

## Live demo

https://neeleshsaxena.github.io/eventsManager

## Tech stack

- React 16
- Redux 4 with `react-redux` 5 and `redux-thunk` for async actions
- Material UI (`@material-ui/core`) for the events table
- `react-power-select` for the city picker
- `react-scripts` (Create React App) for the build toolchain
- `gh-pages` for deployment

## Getting started

1. Get a Ticketmaster Consumer Key by registering an app at https://developer.ticketmaster.com/.
2. Copy `.env.example` to `.env` and set your key:

   ```
   REACT_APP_TICKETMASTER_API_KEY=<your_consumer_key>
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the dev server. On Node 17+ the OpenSSL legacy provider flag is required (see Notes):

   ```
   NODE_OPTIONS=--openssl-legacy-provider npm start
   ```

The app runs on http://localhost:3000.

## Available scripts

- `npm start` — start the development server (CRA).
- `npm run build` — produce a production build in `build/`.
- `npm test` — run the Jest test runner via `react-scripts`.
- `npm run deploy` — build and publish to the `gh-pages` branch (runs `predeploy` then `gh-pages -d build`).

## Deploy

To publish to GitHub Pages:

```
NODE_OPTIONS=--openssl-legacy-provider npm run deploy
```

This pushes the contents of `build/` to the `gh-pages` branch, which serves the site configured by the `homepage` field in `package.json`.

## Notes

- The `NODE_OPTIONS=--openssl-legacy-provider` workaround is needed because the project's webpack toolchain predates the Node 17 / OpenSSL 3.0 update and otherwise fails with an `ERR_OSSL_EVP_UNSUPPORTED` error. Node 16 also works without the flag.
- Do **not** commit your `.env` file — it is already listed in `.gitignore`. The Ticketmaster key is read at build time from `process.env.REACT_APP_TICKETMASTER_API_KEY` (see `src/actions/fetchEvents.js` and `src/actions/city.js`).
