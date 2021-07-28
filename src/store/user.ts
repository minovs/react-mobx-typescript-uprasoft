import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { auth, logout } from '../service/AuthService'
import { IAuthResponse } from '../types/types'

class Users {
  isAuth = false
  constructor() {
    makeAutoObservable(this)
  }
  setAuth(bool: boolean) {
    this.isAuth = bool
  }
  async login(login: string, password: string) {
    try {
      const response = await auth(login, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
    } catch (e) {
      alert(e.response?.data?.message)
    }
  }
  async checkAuth() {
    try {
      const response = await axios.get<IAuthResponse>(`${process.env.REACT_APP_API_URL}/users/refresh`, {
        withCredentials: true,
      })
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
    } catch (e) {
      console.log(e.response?.data?.message)
    }
  }
  async logout() {
    try {
      await logout()
      localStorage.removeItem('token')
      this.setAuth(false)
    } catch (e) {
      console.log(e.response?.data?.message)
    }
  }
}
export default new Users()
