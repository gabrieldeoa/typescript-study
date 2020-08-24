import { Request, Response, response } from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  return response.json({ message: 'Hello World !!!'});
}

export function fakeUser(request: Request, response: Response) {
  const user = createUser({
    name: 'test',
    email: 'test@test.test',
    password: 'password',
    techs: [
      'Node.js',
      'React JS',
      'React Native'
    ]
  });

  return response.json(user);
}

