import { INCREMENT, DECREMENT } from './actionTypes'

export const increment = (text) => ({
    type: INCREMENT,
    text
})

export const decrement = (text) => ({
    type: DECREMENT,
    text
})
// export const increment = {
//     type: INCREMENT,
// }
// export const decrement = {
//     type: DECREMENT
// }