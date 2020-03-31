const globalapiReducer = (state = {}, action) => {
    const { payload, key } = action;
    const currentState = state && state[key];
    switch (action.type) {
        case 'SUCCESS_FETCH':
            return { ...state, [key]: { ...currentState, ...payload.data } };
        case 'FAIL_FETCH':
            return { ...state, [key]: { ...currentState, ...payload.data } };
        default:
            return { ...state };
    }
};

export default globalapiReducer;