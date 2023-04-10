import axios, { AxiosInstance } from 'axios'

export const api: AxiosInstance = axios.create({
  baseURL: 'https://6433c7661c5ed06c9586812f.mockapi.io/api/v1/',
  headers: {
    'Content-Type': 'application.json',
    accept: 'application/json',
  },
})
