import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackgetulio-backend.herokuapp.com',
});

export default api;