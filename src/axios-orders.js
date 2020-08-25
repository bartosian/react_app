import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1bb41.firebaseio.com/'
});

export default instance;