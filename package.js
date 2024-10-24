{
  "name": "ox",
  "version": "0.1.0",
  "private": true,
  "homepage": "./",
  "dependencies": {
    "@google-pay/button-react": "^3.1.0",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.7",
    "firebase": "^10.14.0",
    "hls.js": "^1.5.17",
    "leaflet": "^1.9.4",
    "moment": "^2.30.1",
    "react": "^18.3.1",
    "react-countup": "^6.5.3",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-leaflet": "^4.2.1",
    "react-player": "^2.16.0",
    "react-push-notification": "^1.5.4",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.26.2",
    "react-scripts": "5.0.1",
    "react-stripe-checkout": "^2.6.3",
    "redux": "^5.0.1",
    "simple-peer": "^9.11.1",
    "socket.io-client": "^4.8.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "gh-pages": "^6.2.0",
    "workbox-webpack-plugin": "^7.1.0"
  }
}