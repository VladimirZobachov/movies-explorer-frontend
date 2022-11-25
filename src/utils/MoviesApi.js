import options from './utils';

class MoviesApi {
  constructor(options) {
    this._options = options;
  }

  _check = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getMovies() {
    return fetch(`${this._options.baseUrl}`, {
      headers: this._options.headers,
      method: 'GET',
    })
      .then(this._check);
  }
// .then((response) => response.json())
//     .then((data) => {
//       setFilms(data);
//     });
}

const moviesApi = new MoviesApi(options);
export default moviesApi;
