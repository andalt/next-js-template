import axios from 'axios';

const baseURL = `${process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_API_URL : ''}/api`;

export const instanceApi = axios.create({
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    baseURL,
});
