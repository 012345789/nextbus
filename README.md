This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a web application to track San Francisco Muni vehicles on a map.

It will only run in a local development environment, meaning you must have a
copy of the code on your machine. This is because Nextbus's API only accepts
HTTP requests and not HTTPS. So while you can hit the API locally, if a site
tries to do the same while, most browsers will not allow it due to security
risks. It turns out trying to find a service to host web applications without
SSL is practically impossible. In summary, run this application locally.

To set up and run the application:
1. clone this repository
2. run `npm install`
3. run `npm start` or `npm run build`
