import options from "./utils";

class Api{
    constructor(options) {
        this._options = options;
    }
    _check = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._options.baseUrl}/beatfilm-movies`, {
            headers: this._options.headers
        })
            .then(this._check);
    }
}

const api = new Api(options)
export default api;