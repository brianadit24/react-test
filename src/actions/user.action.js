import axios from 'axios'
const baseUrl = 'https://secure-thicket-40780.herokuapp.com/'
export const getUsers = () => {
    return async dispatch => {
        dispatch({
            type: 'GET_USER_REQUEST'
        })
        try {
            const result = await axios.get(baseUrl + `/users`)
            dispatch({
                type: 'GET_USER_DONE',
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: 'GET_USER_ERROR'
            })
        }
    }
}