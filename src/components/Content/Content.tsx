import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import report from '../../store/report'
import { OverTable } from '../Table/OwerTable'
import { Thead } from '../Table/Thead'
import { Tbody } from '../Table/Tbody'
import './Content.css'

export const Content: FC = observer(() => {
  let content = null
  if (report.report.length > 0)
    content = (
      <>
        <OverTable />
        <table id="table">
          <Thead />
          <Tbody />
        </table>
      </>
    )

  return <>{content}</>
})
