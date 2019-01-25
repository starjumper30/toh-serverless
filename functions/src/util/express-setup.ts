import * as cors from 'cors';
import * as express from 'express';

import {validateFirebaseIdToken} from './auth';

export function initExpressApp() {
  const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
  const app = express();
  const corsMiddleware = cors({
    origin: ['http://localhost:4200', `https://${firebaseConfig.projectId}.firebaseapp.com`]
  });
  app.use(corsMiddleware);
  app.use(validateFirebaseIdToken);
  return app;
}
