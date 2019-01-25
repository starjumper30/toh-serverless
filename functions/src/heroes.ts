import * as functions from 'firebase-functions';

import {initExpressApp} from './util/express-setup';

const app = initExpressApp();

const heroesList = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

app.get('/', async (request, response) => {

  const name:string = request.query.name;

  const heroesResult = name ?
    heroesList.filter(h => h.name.toLowerCase().includes(name.toLowerCase())) :
    heroesList;

  response.json(heroesResult);
});

app.put('/', async (request, response) => {
  const name = request.body.name;
  const id = request.body.id;

  const hero = heroesList.find(h => h.id === id);
  if (hero) {
    hero.name = name;
    response.status(204).end();
  } else {
    response.status(404).end();
  }
});

app.post('/', async (request, response) => {
  const id = heroesList[heroesList.length-1].id + 1;

  const newHero = Object.assign({}, request.body, {id});
  heroesList.push(newHero);
  response.json(newHero);
});

app.get('/:id', async (request, response) => {
  const id = parseInt(request.params.id);
  const result = heroesList.find(h => h.id === id);
  if (result) {
    response.json(result);
  } else {
    response.status(404).send('Hero not found with id' + id);
  }
});

app.delete('/:id', async (request, response) => {
  const id = parseInt(request.params.id);
  const index = heroesList.findIndex(h => h.id === id);
  if (index) {
    heroesList.splice(index, 1);
  }
  response.status(204).end();
});

export const heroes = functions.https.onRequest(app);
