import { makeAutoObservable } from 'mobx'
import worker from './worker'
import report from './report'

class Calendar {
  currentdate: any = new Date()
  constructor() {
    makeAutoObservable(this)
  }
  changeDate(date: Date) {
    const dateToStor = date.getTime().toString()
    this.currentdate = date
    localStorage.setItem('chosenDate', dateToStor)
    report.report = []
    worker.fetchWorkers(dateToStor)
  }
}
export default new Calendar()
