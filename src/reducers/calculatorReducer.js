const ACTIONS = {
    SUM_BY_VALUE: (state, value) => state + value,
    SUBSTRACT_BY_VALUE: (state, value) => state - value,
    MULTIPLY_BY_VALUE: (state, value) => state * value,
    DIVIDE_BY_VALUE: (state, value) => state / value
}

export const calculatorReducer = (state, action) => {
    const actionDispatched = ACTIONS[action.type]
    return actionDispatched ? actionDispatched(state, action.payload) : state
}