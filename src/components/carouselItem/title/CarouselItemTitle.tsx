import React from 'react'
import styled from 'styled-components'

const CardTitle = styled.p`
  margin-left: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
`

interface IProps {
  title: string
}

const CarouselItemTitle = (props: IProps) => {
  const { title } = props
  return <CardTitle>{title}</CardTitle>
}

export default CarouselItemTitle
