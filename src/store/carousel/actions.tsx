import {ThunkAction} from 'redux-thunk'
import {Action} from 'redux'
import {getAllData} from '../../service/dataService'
import {GET_CAROUSEL_DATA} from './actionTypes'

const addCarouselDataAction = (data: any) => {
    console.log(data)
    return {
        type: GET_CAROUSEL_DATA,
        // data: data,
    }
}

//todo add types
export const getCarouselData = (): ThunkAction<void, any, unknown, Action<string>> => {
    console.log('here')
    return dispatch => {
        return getAllData().then(data => dispatch(addCarouselDataAction(data)))
    }
}
