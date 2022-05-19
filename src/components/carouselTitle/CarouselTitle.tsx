import React from 'react'
import styled from 'styled-components'

// Styled component of header title
const Title = styled.h2`
  margin-left: 8px;
`

interface IProps {
  text: string
}

/*
 * Component of title of carousel item
 */
function CarouselTitle(props: IProps) {
  const { text } = props
  return <Title>{text}</Title>
}

export default CarouselTitle
