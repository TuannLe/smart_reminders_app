import axios from 'axios';

const AXIOS = axios.create({
    // baseURL: 'https://smart-reminders-app.herokuapp.com',
    // baseURL: 'http://159.223.41.100:3000/',
    baseURL: 'http://192.168.1.6:3000/',
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
})

export default AXIOS