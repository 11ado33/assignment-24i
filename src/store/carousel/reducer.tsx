import {GET_CAROUSEL_DATA, ICarouselDataGet} from './actionTypes'

const initialState = {
    items: []
}

const reducer = (state = initialState, action: ICarouselDataGet): any => {
    switch (action.type) {
        case GET_CAROUSEL_DATA:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default reducer
