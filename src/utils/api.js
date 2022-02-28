class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    // Запрос на получение массива из 500 последних новостей
    getNews() {
        return fetch(this._baseUrl + 'newstories.json?', {
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    //Запрос на любой элемент по id
    getItemById(id) {
        return fetch(this._baseUrl + 'item/' + id + '.json?', {
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    _checkResponse(res) {
        if (res.ok) { return res.json() }
        return Promise.reject(res);
    }

}

const api = new Api({
    baseUrl: 'https://hacker-news.firebaseio.com/v0/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;