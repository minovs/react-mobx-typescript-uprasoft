import { FC } from 'react'
import { Calendar } from '../../components/Calendar/Calendar'
import { Workers } from '../../components/Workers/Workers'
import { Content } from '../../components/Content/Content'

export const Main: FC = () => {
  return (
    <main>
      <aside>
        <Calendar />
        <Workers />
      </aside>
      <div className="content">
        <Content />
      </div>
    </main>
  )
}
