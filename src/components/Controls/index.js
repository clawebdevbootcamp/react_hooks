import React, { useContext, useRef } from 'react'
import { timerContext } from '../../Contexts/TimerContext'
import { Actions } from '../../Reducers/timerReducer'
import useTick from '../../hooks/useTick'
import Button from '../Button'
import TimeInput from '../TimeInput'
import './controls.css'

function Section({ title, body }) {
    return <div className='section'>
        <h2>{title}</h2>
        <div className='body'>
            {body}
        </div>
    </div>
}

export default function Controls() {

    const [, dispatch] = useContext(timerContext)
    const startStopwatch = useTick(() => dispatch(Actions.INC()))
    const startCountdown = useTick(() => dispatch(Actions.DEC()))

    const inputRef = useRef(null)

    const setTime = () => {
        const [h, m, s] = inputRef.current.get()

        const time = new Date(2022, 8, 21, h, m, s)

        dispatch(Actions.SET(time))
    }

    return (
        <div className='controls-container'>
            <Section title="Stopwatch" body={(
                <Button onClick={startStopwatch}>Start</Button>
            )} />
            <Section title="Countdown" body={(
                <>
                    <TimeInput ref={inputRef} />
                    <div className='buttons'>
                        <Button onClick={() => {setTime(); startCountdown();}}>Start</Button>
                        <Button color='yellow' onClick={setTime}>Set</Button>
                    </div>
                </>
            )} />
        </div>
    )
}
