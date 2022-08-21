import { useMemo } from 'react'
import Digit from '../Digit/Digit'

export default function DoubleDigit({ number }) {

    const getDigitFromNumber = (number, position) => {
        return Math.floor(number % (Math.pow(10, position)) / Math.pow(10, Math.max(position - 1, 0)))
    }

    const digit1 = useMemo(() => getDigitFromNumber(number, 1), [number])
    const digit2 = useMemo(() => getDigitFromNumber(number, 2), [number])

    return (
        <div>
            <Digit digit={digit2} />
            <Digit digit={digit1} />
        </div>
    )
}
