import React, { createContext, useReducer } from "react";
import { reducer } from "../Reducers/timerReducer";

const defaultTime = new Date(2022, 8, 12, 0, 0, 0); // the first three arguments are irrelevent for us now

export const timerContext = createContext(defaultTime)

export default function TimeProvider({ children }) {

    const reduce = useReducer(reducer, defaultTime)

    return (
        <timerContext.Provider value={reduce}>
            {children}
        </timerContext.Provider>
    )
}
