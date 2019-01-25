import * as functions from 'firebase-functions';

import * as cors from 'cors';
import * as express from 'express';

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

const app = express();
const corsMiddleware = cors({
  origin: ['http://localhost:4200', `https://${firebaseConfig.projectId}.firebaseapp.com`]
});
app.use(corsMiddleware);

app.get(['', '/'], (request, response) => {
  response.json("Hello from Firebase!");
});

export const helloWorld = functions.https.onRequest(app);
