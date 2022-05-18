import React from 'react'

interface IProps {
  imageUrl: string
}

function CarouselItemImage(props: IProps) {
  const { imageUrl } = props

  return <img width="100px" height="200px" src={imageUrl} alt={imageUrl} />
}

export default CarouselItemImage
