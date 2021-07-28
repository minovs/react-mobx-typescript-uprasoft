import API from '../api/api'
import { AxiosResponse } from 'axios'
import { IWrkersList } from '../types/types'

export const fetchWorkers = async (date: string): Promise<AxiosResponse<IWrkersList[]>> => {
  return API.get<IWrkersList[]>(`/workers/${date}`)
}
