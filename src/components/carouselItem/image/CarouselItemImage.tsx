import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: 200px;
`

interface IProps {
  imageUrl: string
}

function CarouselItemImage(props: IProps) {
  const { imageUrl } = props

  return <Image src={imageUrl} alt={imageUrl} />
}

export default CarouselItemImage
