import axios from 'axios'
import { IAuthResponse } from '../types/types'
import user from '../store/user'

const API = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
})

API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

API.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config.flag) {
      originalRequest.flag = true
      try {
        const response = await axios.get<IAuthResponse>(`${process.env.REACT_APP_API_URL}/users/refresh`, {
          withCredentials: true,
        })
        localStorage.setItem('token', response.data.accessToken)
        return API.request(originalRequest)
      } catch (e) {
        user.setAuth(false)
      }
    }
    throw error
  }
)

export default API
