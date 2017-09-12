# Populous Javascript Challenge - Simple Flight

This is Alex Price's solution to the Populous dev challenge. It took me
around 15h of development.

I believe I've met the whole breif and added a few nice features.

## Development / viewing the app

The front-end and server are seperate applications and therefore need to be
ran in seperate terminal windows.

First clone the repo (if necessary) and `cd` into it:

```
  git clone git@github.com:alexpriceonline/simple-flight.git && cd simple-flight
```

### Run the front-end

Install the node dependencies:

`yarn`

Run the development server (localhost:3000):

`yarn run start`

### Run the API server

Install the node dependencies:

`yarn`

Run the development server (localhost:3001):

`node index.js`

## Deployment

As both the front-end and backend are seperate apps they need to be deployed
seperatly.

My recommended deployment method would be running two [`pm2`](https://github.com/Unitech/pm2)
instances on one Ubuntu server and using NGINX as the HTTP server to proxy
incoming requests.

### Building production files

Only the front-end app needs to be built explicitly for prod. Do so with the
`npm run build` command. This creates a `build` directory with the production
build which can be deployed as mentioned above.

## Limitations / improvements

- There is no DB being used and saving new flights works by writing to the JSON file
- The server doesn't return those new flights in subsequent requests meaning the front-end easily get's out of sync with the server
- Destinations available when adding new flights are actually the available origins
- Error handling is sparse
- No front-end app loading icon

## Frameworks used

The front-end was built using the awesome [create-react-app](https://github.com/facebookincubator/create-react-app) package.
The front-end state management uses [Redux](https://github.com/reactjs/redux) package.
The backend was built using the [express.js](https://github.com/expressjs/express) web framework.
