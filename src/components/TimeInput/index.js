import React, { forwardRef, useRef, useState, useImperativeHandle } from 'react'

const Input = forwardRef(({ value, setValue, onDone = () => {} }, ref) => {

    const validateInput = e => {
        const value = e.target.value
        
        if (value.length === 2) {
            onDone()
        }

        if (/^[0-9]*$/g.test(value) && value.length <= 2)
            setValue(value)
    }

    const loseFocus = () => {
        if (value === '') 
            setValue('00')
    }

    return <input 
                type="text" 
                className='digit-input'
                maxLength={2} 
                value={value} 
                onChange={validateInput}
                ref={ref}
                onFocus={e => e.target.select()}
                onBlur={loseFocus}
            />
})

export default forwardRef((_, ref) => {

    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    
    useImperativeHandle(
      ref,
      () => {
        return {
            reset: () => { 
                setHours('00')
                setMinutes('00')
                setSeconds('00')
             },
            get: () => [hours, minutes, seconds]
        }
      },
      [hours, minutes, seconds],
    )

    const hoursRef = useRef(null)
    const minutesRef = useRef(null)
    const secondsRef = useRef(null)

    const onDone = (ref) => () => {
        ref.current.focus()
        ref.current.select()
    }

    return (
        <div className='input-container'>
            <Input 
                value={hours} 
                setValue={setHours} 
                ref={hoursRef}
                onDone={onDone(minutesRef)} />
            <b>:</b>
            <Input 
                value={minutes} 
                setValue={setMinutes} 
                ref={minutesRef}
                onDone={onDone(secondsRef)} />
            <b>:</b>
            <Input value={seconds} setValue={setSeconds} ref={secondsRef} />
        </div>
    )
})
