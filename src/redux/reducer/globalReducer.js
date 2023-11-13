import ActionType from './globalActionType.js';

const globalState = {
    totalOrder: 0
}

//reducer
const rootReducer = (state = globalState, action) => {
    if (action.type == ActionType.PLUS_ORDER) {
        return {
            ...state,
            totalOrder: state.totalOrder + 1
        }
    }
    if (action.type == ActionType.MINUS_ORDER) {
        let totalOrder = 0;
        if (state.totalOrder > 0) {
            return {
                ...state,
                totalOrder: state.totalOrder - 1
            }
        } else {
            return {
                ...state,
                totalOrder: totalOrder
            }
        }
    }
    return state;
}

export default rootReducer;