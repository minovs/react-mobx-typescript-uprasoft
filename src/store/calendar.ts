import { makeAutoObservable } from 'mobx'
import Cookies from 'universal-cookie'
import worker from './worker'
import report from './report'

const cookies = new Cookies()

class Calendar {
  currentdate: Date = new Date()
  constructor() {
    makeAutoObservable(this)
  }
  changeDate(date: Date) {
    this.currentdate = date
    cookies.set('chosenDate', date.getTime())
    report.report = []
    worker.fetchWorkers()
  }
}
export default new Calendar()
