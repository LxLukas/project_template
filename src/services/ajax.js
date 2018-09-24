import axios from 'axios';

let baseUrl = 'your api url';

export default {
    post(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.post(`${baseUrl}/${url}`, params).then((res) => {
                if (res.status === 200) {
                    resolve(res.data);
                } else {
                    console.warn(res.status)
                    reject(res.status);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    },
    get(url, params = {}) {
        let paramsStr = '';
        for (let key in params) {
            paramsStr += paramsStr === '' ? `${key}=${params[key]}` : `&${key}=${params[key]}`;
        }
        return new Promise((resolve, reject) => {
            let realUrl = paramsStr === '' ? url : `${url}?${paramsStr}`;
            axios.get(`${baseUrl}/${realUrl}`).then((res) => {
                if (res.status === 200) {
                    resolve(res.data);
                } else {
                    console.warn(res.status);
                    reject(res.status);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
