import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nodeapi-rocketseat-jean.herokuapp.com'
});

export default api;