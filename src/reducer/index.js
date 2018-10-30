const initialState = {
    number: 0
}

function todoApp(state=initialState, action) {
    switch(action.type) {
        case 'increment':
            return Object.assign({}, state, {
                number: action.number
            });
        case 'decrement':
            return Object.assign({}, state, {
                number: action.number
            });
        default:
        return state;
    }
    
}

export default todoApp;