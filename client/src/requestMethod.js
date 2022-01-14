import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/"
const Token =   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTI3MmFjNzZlNDlkZTdhMTE0YjQwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzYwMDk0MCwiZXhwIjoxNjM3ODYwMTQwfQ.6_PkSNCv8LADB9Qe5onr095sCi6gq6X-1N3OSFU8yL4";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${Token}`}
});