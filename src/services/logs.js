import axios from 'axios';

export const getAll = (page) => axios.get(`http://localhost:8080/logs?page=${page}`).then(res => res.data);