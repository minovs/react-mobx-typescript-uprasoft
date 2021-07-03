import { FC } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { ru } from 'date-fns/esm/locale'
import 'react-datepicker/dist/react-datepicker.css'
import calendar from '../../store/calendar'
import { observer } from 'mobx-react-lite'

registerLocale('ru', ru)

export const Calendar: FC = observer(() => {
  return (
    <>
      <DatePicker
        selected={calendar.currentdate}
        onChange={(date: Date) => calendar.changeDate(date)}
        dateFormat="dd.MM.yyyy"
        locale="ru"
      />
    </>
  )
})
