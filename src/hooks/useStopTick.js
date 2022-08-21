import { useContext } from 'react'
import { tickContext } from '../Contexts/tickContext'

export default function useStopTick() {
  
    const [, stop] = useContext(tickContext)

    return stop;
    
}
