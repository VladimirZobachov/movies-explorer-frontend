export const BASE_URL = 'http://localhost:3001';

function check(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}

export const register = (email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "password": password,
            "email": email,
            "name": name
        }),
    })
        .then((res)=>{
            check(res);
        })
}

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        }),
    })
        .then((res)=>{
            check(res);
        })
}

export const getContent = (jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${jwt}`,
        }
    })
        .then((res)=>{
            check(res);
        })
}

