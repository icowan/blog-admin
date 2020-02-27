import request from '../utils/request';

export async function postLogin(params) {
    return request('/account/login', {
        method: 'POST',
        body: {
            ...params,
        },
    });
}