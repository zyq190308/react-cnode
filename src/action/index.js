import { INCREMENT, DECREMENT } from './actionTypes'

export const increment = (number) => ({
    type: INCREMENT,
    number
})

export const decrement = (number) => ({
    type: DECREMENT,
    number
})
// export const increment = {
//     type: INCREMENT,
// }
// export const decrement = {
//     type: DECREMENT
// }