import React, { useState } from 'react'
import { getAllData } from '../../service/dataService'
import { CarouselData } from '../../types/carousel'
import Carousel from '../../containers/carousel/Carousel'

function HomePage() {
  const [carouselData, setCarouselData] = useState<CarouselData>()
  const getData = () => {
    getAllData().then((data) => setCarouselData(data))
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
