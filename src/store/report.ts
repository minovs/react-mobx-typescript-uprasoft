import { makeAutoObservable, runInAction } from 'mobx'
import { fetchReport } from '../service/ReportService'
import { IReport } from '../types/types'

class Report {
  report: IReport[] = []
  hideTimeInObg: string = '1'
  constructor() {
    makeAutoObservable(this)
  }
  async fetchReport(id: string) {
    const date = localStorage.getItem('chosenDate')
    try {
      const response = await fetchReport(date!, id)
      runInAction(() => {
        this.report = response.data
      })
    } catch (e) {
      console.log(e)
    }
  }
  hideTimeInObgChange(time: string) {
    this.hideTimeInObg = time
  }
}
export default new Report()
