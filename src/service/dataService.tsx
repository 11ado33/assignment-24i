import axios from 'axios'
import { CarouselItem } from '../types/carousel'

const DATA_API_PATH = '/data.json'

// todo add type
export const getAllData = (): Promise<any> => {
  console.log('heeeeere')
  return new Promise((resolve, reject) => {
    axios
      .get(DATA_API_PATH)
      .then((res: any) => {
        console.log('heere')
        console.log(res.data)
        resolve(res.data)
      })
      .catch((err) => reject(err))
  })
}

// this would probably get data from data detail endpoint
export const getCarouselItem = (id: string): Promise<CarouselItem | null> =>
  new Promise((resolve, reject) => {
    axios
      .get(DATA_API_PATH)
      .then((res: any) => {
        for (const section of res.data.carousels) {
          for (const item of section.items) {
            console.log(item.id)
            if (item.id == id) {
              resolve(item)
            }
          }
        }
        resolve(null)
      })
      .catch((err) => reject(err))
  })
