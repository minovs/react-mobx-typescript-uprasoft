import API from '../api/api'
import { AxiosResponse } from 'axios'
import { IAuthResponse } from '../types/types'

export const auth = async (login: string, password: string): Promise<AxiosResponse<IAuthResponse>> => {
  return API.post<IAuthResponse>('/users/login', { login, password })
}
export const logout = (): Promise<void> => {
  return API.post('/users/logout')
}
