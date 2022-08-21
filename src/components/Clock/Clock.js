import React, { useContext } from 'react'
import { timerContext } from '../../Contexts/TimerContext'

import DoubleDigit from '../DoubleDigit/DoubleDigit'
import './Clock.css'

export default function Clock() {

    const [date] = useContext(timerContext)

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return (
        <div className='clockContainer'>
            <DoubleDigit number={hours} />
            <DoubleDigit number={minutes} />
            <DoubleDigit number={seconds} />
        </div>
    )
}
