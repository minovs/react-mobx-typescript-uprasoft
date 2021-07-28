import { makeAutoObservable, runInAction } from 'mobx'
import { fetchWorkers } from '../service/WorkersService'
import { IWrkersList } from '../types/types'

class Workers {
  workersList: IWrkersList[] = []
  constructor() {
    makeAutoObservable(this)
  }
  async getWorkers(date: string) {
    try {
      const response = await fetchWorkers(date)
      runInAction(() => {
        this.workersList = response.data
      })
    } catch (e) {
      alert(e.response?.data?.message)
    }
  }
}
export default new Workers()
