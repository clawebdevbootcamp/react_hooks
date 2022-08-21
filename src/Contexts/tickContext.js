import React, { createContext, useRef } from "react";

export const tickContext = createContext(null)

export default function TickProvider({ children }) {

    const ref = useRef(null)

    const tick = (callback) => {
        stop()
        ref.current = setInterval(() => {
            callback()
        }, 1000)
    }

    const stop = () => {
        clearInterval(ref.current)
    }

    return (
        <tickContext.Provider value={[tick, stop]}>
            {children}
        </tickContext.Provider>
    )
}
