import API from '../api/api'
import { AxiosResponse } from 'axios'
import { IReport } from '../types/types'

export const fetchReport = async (date: string, id: string): Promise<AxiosResponse<IReport[]>> => {
  return API.get<IReport[]>(`/reports/${date}/${id}`)
}
