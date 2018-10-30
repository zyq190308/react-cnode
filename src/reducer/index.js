import { INCREMENT, DECREMENT } from '../action/actionTypes'

const initialState = {
    number: 0
}

function todoApp(state=initialState, action) {
    console.log(action)
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                number: ++state.number
            });
        case DECREMENT:
            return Object.assign({}, state, {
                number: --state.number
            });
        default:
        return state;
    }
    
}

export default todoApp;