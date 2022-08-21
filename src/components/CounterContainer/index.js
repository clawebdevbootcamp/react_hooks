import React, { useContext } from 'react'
import { timerContext } from '../../Contexts/TimerContext'
import useStopTick from '../../hooks/useStopTick'
import { Actions } from '../../Reducers/timerReducer'
import Button from '../Button'
import Clock from '../Clock/Clock'
import './CounterContainer.css'

export default function CounterContainer() {

  const stop = useStopTick()
  const [, dispatch] = useContext(timerContext)

  const reset = () => {
    stop()
    dispatch(Actions.RESET())
  }

  return (
    <div className='counter-container'>
        <Clock />
        <Button color="red" onClick={reset}>Reset</Button>
    </div>
  )
}
