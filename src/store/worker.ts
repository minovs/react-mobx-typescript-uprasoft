import { makeAutoObservable, runInAction } from 'mobx'
import { IWrkersList } from '../types/types'

class Workers {
  workersList: IWrkersList[] = []
  constructor() {
    makeAutoObservable(this)
  }
  async fetchWorkers() {
    //cookies.set('chosenDate', Date.now())
    try {
      const response = await fetch('/api/workers')
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
