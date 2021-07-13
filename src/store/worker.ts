import { makeAutoObservable, runInAction } from 'mobx'
import { IWrkersList } from '../types/types'

class Workers {
  workersList: IWrkersList[] = []
  constructor() {
    makeAutoObservable(this)
  }
  async fetchWorkers(date: string) {
    try {
      const response = await fetch(`/api/workers/${date}`)
      const json: IWrkersList[] = await response.json()
      runInAction(() => {
        this.workersList = json
      })
    } catch (e) {
      console.log(e)
    }
  }
}
export default new Workers()
