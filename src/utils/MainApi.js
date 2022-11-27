import {BASE_URL} from "./constants";
import options from "./utils";

function check(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export const register = (email, password, name) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    password,
    email,
    name,
  }),
})
  .then((res) => check(res));

export const authorize = (email, password) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify({
    email,
    password,
  }),
})
  .then((res) => check(res));

export const getUser = (jwt) => {
  const token = jwt.replace(/\"/g, '');
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => check(res));
};

export const saveMovieCard = (card, jwt) => {
  const token = jwt.replace(/\"/g, '');
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      "country": card.country,
      "director": card.director,
      "duration": card.duration,
      "year": card.year,
      "description": card.description,
      "image": options.baseUrl + card.image.url,
      "trailerLink": card.trailerLink,
      "thumbnail": options.baseUrl + card.image.formats.thumbnail.url,
      "movieId": card.id,
      "nameRU": card.nameRU,
      "nameEN": card.nameEN
    })
  })
      .then((res) => check(res));
}
