import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: query.url,
        method: 'get',
        params: query
    });
};
