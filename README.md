This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a web application to track San Francisco Muni vehicles on a map.

The application will only run in a local development environment, so you must have a copy of the code on your machine. This is because NextBus's API only accepts HTTP requests and not HTTPS. Browsers will not allow HTTPS sites to call HTTP endpoints due to security risks. While I would have loved to host it on Heroku or something similar, it turns out trying to find a service to host web applications without SSL is practically impossible.

To set up and run:
`npm install`
then `npm start` or `npm run build`
