import React from 'react'

interface IProps {
  text: string
}

function CarouselTitle(props: IProps) {
  const { text } = props
  return <h2>{text}</h2>
}

export default CarouselTitle
