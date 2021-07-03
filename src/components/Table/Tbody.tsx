import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import report from '../../store/report'

export const Tbody: FC = observer(() => {
  const hideTimeInObg: number = +report.hideTimeInObg
  let i = 0
  let toRoad: number
  let outObg: number

  let content = (
    <tbody>
      {report.report.map((item, index) => {
        if (+item.t_in_obg > hideTimeInObg) {
          i === 0 ? (toRoad = 0) : (toRoad = +item.t_in.substr(0, 2) * 60 + +item.t_in.substr(3, 2) - outObg)
          outObg = +item.t_out.substr(0, 2) * 60 + +item.t_out.substr(3, 2)
          i++
          return (
            <tr key={index} className={item.marker === 1 ? 'marker' : undefined}>
              <td>{item.inf}</td>
              <td>{item.adr}</td>
              <td>{item.t_in.substr(0, 5)}</td>
              <td>{item.t_out.substr(0, 5)}</td>
              <td>{toRoad}</td>
              <td>{item.t_in_obg}</td>
            </tr>
          )
        } else {
          return false
        }
      })}
    </tbody>
  )

  return <>{content}</>
})
