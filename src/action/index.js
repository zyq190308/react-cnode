import { getTopicDetail } from '../api';

import { CHANGE_TAB, INIT_DETAIL } from './actionTypes'

export const changeTab = (tab) => ({
    type: CHANGE_TAB,
    tab
})

export const initDetail = (detail) => ({
    type: INIT_DETAIL,
    detail
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
