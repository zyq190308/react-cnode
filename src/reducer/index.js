import { INIT_DETAIL } from '../action/actionTypes'

const initialState = {
    detail: {
        title: '',
        content: '',
        reply_count: '',
        replies: [],
        author: {
            avatar_url: '',
            loginname: ''
        }
    }
}

function App(state=initialState, action) {
    switch(action.type) {
        case INIT_DETAIL:
            return Object.assign({}, state, {
                detail: action.detail
            });
        default:
        return state;
    }
    
}

export default App;