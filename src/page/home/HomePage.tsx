import React, { useState } from 'react'
import { CarouselData } from '@/types/carousel'
import Carousel from '@/containers/carousel/Carousel'
import { store } from '@/store/store'
import { getCarouselData } from '@/store/carousel/actions'
import { ICarouselDataGet } from '@/store/carousel/actionTypes'

/*
 * Component for homepage
 */
function HomePage() {
  const [carouselData, setCarouselData] = useState<CarouselData>()

  // Method for getting carousel data
  const getData = () => {
    store
      .dispatch(getCarouselData() as any)
      .then((data: ICarouselDataGet) => {
        setCarouselData(data.payload)
      })
      .catch(console.error)
  }

  if (!carouselData) getData()

  return (
    <div>
      {carouselData &&
        carouselData.carousels.map((carousel, index) => (
          <Carousel key={index} data={carousel} />
        ))}
    </div>
  )
}

export default HomePage
