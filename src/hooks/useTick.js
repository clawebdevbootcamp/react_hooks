import { useContext } from "react";
import { tickContext } from "../Contexts/tickContext";

/** this hook will call the callback function every second */
export default function useTick(callback) {

    const [tick] = useContext(tickContext)
    
    return () => {
        tick(callback)
    }
}
