import { getTopicDetail, getTopics } from '../api';

import { GET_LIST, INIT_DETAIL } from './actionTypes'

export const initDetail = (detail) => ({
    type: INIT_DETAIL,
    detail
})

export const getList = (list) => ({
    type: GET_LIST,
    list
})

export const getDetail = (id) => {
    return (dispatch) => {
        getTopicDetail({id}).then(res => {
            const { status, data } = res
            if(status === 200) {
                const res = data.data
                dispatch(initDetail(res))
            }
        })
    }
}

export const fetchList = (params) => {
    return (dispatch) => {
        getTopics(params).then(res => {
            const { status, data } = res
            if(status === 200) {
                const res = data.data
                dispatch(getList(res))
            }
        })
    }
}
