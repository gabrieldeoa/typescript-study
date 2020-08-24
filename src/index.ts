import express from 'express';
import { helloWorld, fakeUser } from './routes';

const PORT = 3333;
const app = express();

app.get('/', helloWorld);
app.get('/user', fakeUser);

app.listen(PORT);