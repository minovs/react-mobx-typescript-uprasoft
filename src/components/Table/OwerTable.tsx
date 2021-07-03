import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Cookies from 'universal-cookie'
import report from '../../store/report'

const cookies = new Cookies()

export const OverTable: FC = observer(() => {
  useEffect(() => {
    const hideTimeInObgFromCookies = cookies.get('hideTimeInObg')
    if (hideTimeInObgFromCookies && hideTimeInObgFromCookies !== '1') {
      report.hideTimeInObgChange(hideTimeInObgFromCookies)
    }
  }, []) // eslint-disable-line
  const hideTimeInObgChangeHendler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    cookies.set('hideTimeInObg', e.target.value)
    report.hideTimeInObgChange(e.target.value)
  }
  return (
    <div className="overTable">
      <div className="child buttons">
        <button className="getMap">Карта</button>
        <button className="milage">Пробег</button>
      </div>
      <div className="milInfBlock child">.</div>
      <div className="selObg child">
        Показывать больше:
        <select value={report.hideTimeInObg} onChange={hideTimeInObgChangeHendler}>
          <option value="0">все</option>
          <option value="1">1 минут</option>
          <option value="2">2 минут</option>
          <option value="5">5 минут</option>
        </select>
      </div>
    </div>
  )
})
