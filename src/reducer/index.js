import { INIT_DETAIL, GET_LIST } from '../action/actionTypes'

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
    },
    list: []
}

function App(state=initialState, action) {
    switch(action.type) {
        case INIT_DETAIL:
            return Object.assign({}, state, {
                detail: action.detail
            });
        case GET_LIST:
            return Object.assign({}, state, {
                list: action.list
            });
        default:
        return state;
    }
    
}

export default App;