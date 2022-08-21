const defaultTime = new Date(2022, 8, 12, 0, 0, 0); // the first three arguments are irrelevent for us now

const ACTIONS = {
    RESET: 'reset',
    SET: 'set',
    INC: 'increment',
    DEC: 'decrement'
}

// transforming the ACTIONS object to an object with the same keys,
// with each key having a value of a function: ACTION_KEY: (value) => ({ type: 'ACTION_VALUE', value })
export const Actions = Object.keys(ACTIONS).reduce((a, b) => ({...a, [b]: value => ({ type: ACTIONS[b], value})}), {})

export const reducer = (state, action) => {
    let newState = new Date(state)
    switch (action.type) {
        case ACTIONS.RESET:
            return defaultTime;
        case ACTIONS.SET:
            newState = new Date(action.value)
            return newState
        case ACTIONS.INC:
            newState.setSeconds(newState.getSeconds() + 1)
            return newState;
        case ACTIONS.DEC:
            newState.setSeconds(newState.getSeconds() - 1)
            return newState;
        default:
            return state;
    }
}