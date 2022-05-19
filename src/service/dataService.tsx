import axios from 'axios'
import { CarouselData, Movie } from '@/types/carousel'

const DATA_API_PATH = '/data.json'

/*
 * Service responsible for downloading the carousel data from API
 */
export const getCarouselDataFromApi = (): Promise<CarouselData> => {
  return new Promise((resolve, reject) => {
    axios
      .get(DATA_API_PATH)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => reject(err))
  })
}

/*
 * Service for getting movie idem by ID this would probably get data from data detail endpoint
 */
export const getMovieByID = (id: string): Promise<Movie | null> =>
  new Promise((resolve, reject) => {
    axios
      .get(DATA_API_PATH)
      .then((res) => {
        for (const section of res.data.carousels) {
          for (const item of section.items) {
            if (item.id == id) {
              resolve(item)
            }
          }
        }
        resolve(null)
      })
      .catch((err) => reject(err))
  })
