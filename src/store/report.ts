import { makeAutoObservable, runInAction } from 'mobx'
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
      const response = await fetch(`/api/reports/${date}/${id}`)
      const json = await response.json()
      runInAction(() => {
        this.report = json
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
