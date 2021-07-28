import { FC, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { WorkersList } from './WorkersList'
import worker from '../../store/worker'

export const Workers: FC = observer(() => {
  const workersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elementsParentToRemoveClass = workersRef.current?.querySelectorAll('.hedactiv')
    elementsParentToRemoveClass?.forEach((el) => {
      el.classList.remove('hedactiv')
    })

    const elementsChildren = workersRef.current!.querySelectorAll('[data-id]')
    elementsChildren!.forEach((elem) => {
      const elemChildrenWithClassActiv = elem.querySelector('.activ')
      if (elemChildrenWithClassActiv) {
        const parentId = elemChildrenWithClassActiv.getAttribute('data-parent')
        const parentElem = workersRef.current!.querySelector(`[data-pel="${parentId}"]`)
        parentElem?.setAttribute('class', 'hedactiv')
      }
    })
  }, [worker.workersList]) // eslint-disable-line

  return (
    <div ref={workersRef}>
      <WorkersList />
    </div>
  )
})
