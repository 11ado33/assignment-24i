import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { getCarouselDataFromApi } from '@/service/dataService'
import { GET_CAROUSEL_DATA, ICarouselDataGet } from './actionTypes'
import { ICarouselState } from './type.d'
import { CarouselData } from '@/types/carousel'

/**
 * Function that gets carousel data
 * @param data data that should be stored
 */
const addCarouselDataAction = (data: CarouselData): ICarouselDataGet => {
  return {
    type: GET_CAROUSEL_DATA,
    payload: data
  }
}

/*
 * Redux {@link ThunkAction} that gets carousel data
 */
const getCarouselData = (): ThunkAction<
  void,
  ICarouselState,
  unknown,
  Action<string>
> => {
  return (dispatch) => {
    return getCarouselDataFromApi().then((data) =>
      dispatch(addCarouselDataAction(data))
    )
  }
}

export { getCarouselData }
