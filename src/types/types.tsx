export interface IAuthResponse {
  accessToken: string
  refreshToken: string
}
export interface IWrker {
  id: string
  name: string
  parent_id: number
  id_log: string
  status: string | null
}
export interface IWrkersList {
  id: string
  name: string
  parent_id: number
  id_log: number
  status: string | null
  children: IWrker[] | null
}
export interface IReport {
  inf: string
  adr: string
  lat: string
  lng: string
  marker: number
  id_obg: number
  t_in: string
  t_out: string
  t_dist: string
  t_in_obg: string
  s_dist: string
}
