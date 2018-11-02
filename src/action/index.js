import { INCREMENT, DECREMENT } from './actionTypes'

export const increment = (text) => ({
    type: INCREMENT,
    text
})

export const decrement = (text) => ({
    type: DECREMENT,
    text
})