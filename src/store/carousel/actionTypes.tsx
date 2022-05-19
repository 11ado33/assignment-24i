import { CarouselData } from '@/types/carousel'

export const GET_CAROUSEL_DATA = 'getCarouselData'

export interface ICarouselDataGet {
  type: typeof GET_CAROUSEL_DATA
  payload: CarouselData
}
