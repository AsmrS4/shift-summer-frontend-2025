import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://shift-intensive.ru/api/delivery',
});

instance.interceptors.response.use(
    (response) => {
        console.log(response);
        return response;
    },
    (error) => {
        console.log(error);
    },
);

export default instance;
