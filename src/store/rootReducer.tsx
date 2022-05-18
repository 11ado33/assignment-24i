import {combineReducers} from 'redux'
import carouselReducer from './carousel/reducer'

const rootReducer = combineReducers({
    carousel: carouselReducer
})

export default rootReducer
