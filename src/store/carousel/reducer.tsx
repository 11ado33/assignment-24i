import { ICarouselDataGet } from './actionTypes'
import { ICarouselState } from './type.d'

const initialState = {
  items: []
}

/**
 * Reducer that should be responsible for storing data of movie carousel
 * @param state current state
 * @param action action that should be performed
 */
const reducer = (
  state = initialState,
  action: ICarouselDataGet
): ICarouselState => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
