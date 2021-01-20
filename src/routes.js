import { Router } from 'express';

import CharacterController from './app/controllers/CharacterController';
import LogController from './app/controllers/LogController';

import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

routes.use(logRequestsMiddleware);

routes.get('/characters', CharacterController.index);
routes.get('/charactersName', CharacterController.show);

routes.get('/logs', LogController.index);

export default routes;
