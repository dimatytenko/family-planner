import superagent from 'superagent';
import {SERVER_URL} from '../constants/env';
import {getToken} from '../hooks/auth';

export const postQuery = (query: string) => {
  const bearerToken = getToken();
  if (bearerToken) return superagent.post(`${SERVER_URL}${query}`).set('Authorization', 'Bearer ' + bearerToken);

  return superagent.post(`${SERVER_URL}${query}`);
};

export const getQuery = (query: string) => {
  const bearerToken = getToken();
  if (bearerToken) return superagent.get(`${SERVER_URL}${query}`).set('Authorization', 'Bearer ' + bearerToken);

  return superagent.get(`${SERVER_URL}${query}`);
};

export const putQuery = (query: string) => {
  const bearerToken = getToken();
  if (bearerToken) return superagent.put(`${SERVER_URL}${query}`).set('Authorization', 'Bearer ' + bearerToken);

  return superagent.put(`${SERVER_URL}${query}`);
};

export const deleteQuery = (query: string) => {
  const bearerToken = getToken();
  if (bearerToken) return superagent.delete(`${SERVER_URL}${query}`).set('Authorization', 'Bearer ' + bearerToken);

  return superagent.delete(`${SERVER_URL}${query}`);
};

export const patchQuery = (query: string) => {
  const bearerToken = getToken();
  if (bearerToken) return superagent.patch(`${SERVER_URL}${query}`).set('Authorization', 'Bearer ' + bearerToken);

  return superagent.patch(`${SERVER_URL}${query}`);
};
