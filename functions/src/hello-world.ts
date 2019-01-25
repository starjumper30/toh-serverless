import * as functions from 'firebase-functions';

import {initExpressApp} from "./util/express-setup";

const app = initExpressApp();

app.get(['', '/'], (request, response) => {
  response.json(`Hello ${request['user'].name}`);
});

export const helloWorld = functions.https.onRequest(app);
