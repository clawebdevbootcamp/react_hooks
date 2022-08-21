import React, { useEffect, useState } from 'react'
import './Digit.css'

export default function Digit({ digit = 0 }) {

  const [fold, setFold] = useState(false)
  const [localDigit, setDigit] = useState(digit)

  useEffect(() => {
    const timeout = null;
    const AdjustedDigit = digit < 10 && digit >= 0? digit: 0;
    
    if (AdjustedDigit !== localDigit) {
      setFold(true)
      setTimeout(() => {
        setFold(false)
        setDigit(AdjustedDigit)
      }, 600)
    }

    // clear the timeout regardless of its state
    return () => clearTimeout(timeout)
  }, [digit, localDigit])

  return (
    <div className='digitContainer'>
        <div className='card upper'>
          <span>{fold? digit: localDigit}</span>
        </div>
        <div className='card lower'>
          <span>{localDigit}</span>
        </div>
        <div className={'card upper flip' + (fold? " fold": "")}>
          <span>{localDigit}</span>
        </div>
        <div className={'card lower unflip' + (fold? " fold": "")}>
          <span>{digit}</span>
        </div>
    </div>
  )
}
