import React, { FC, useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Cookies from 'universal-cookie'
import worker from '../../store/worker'
import calendar from '../../store/calendar'
import report from '../../store/report'
import { Accordion, AccordionSummary, AccordionDetails } from './accordion'
import './Workers.css'

const cookies = new Cookies()

export const WorkersList: FC = observer(() => {
  const [expanded, setExpanded] = useState<string | false>('panel61')

  useEffect(() => {
    const chosenDate: number = +cookies.get('chosenDate')
    chosenDate !== undefined ? calendar.changeDate(new Date(chosenDate)) : worker.fetchWorkers()
  }, [])

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }
  return (
    <>
      {worker.workersList.map((worker) => (
        <div key={worker.id} data-id={worker.id}>
          <Accordion square expanded={expanded === `panel${worker.id}`} onChange={handleChange(`panel${worker.id}`)}>
            <AccordionSummary>
              <h4 data-pel={worker.id}>{worker.name}</h4>
            </AccordionSummary>
            {worker.children?.map((item) => (
              <AccordionDetails key={item.id}>
                {item.status === 'activ' ? (
                  <h4 className="activ" onClick={() => report.fetchReport(item.id_log)} data-parent={item.parent_id}>
                    -{item.name}
                  </h4>
                ) : (
                  <h4>-{item.name}</h4>
                )}
              </AccordionDetails>
            ))}
          </Accordion>
        </div>
      ))}
    </>
  )
})
