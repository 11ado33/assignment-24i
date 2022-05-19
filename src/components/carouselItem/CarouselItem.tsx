import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Movie } from '../../types/carousel'
import CarouselItemTitle from './title/CarouselItemTitle'
import CarouselItemImage from './image/CarouselItemImage'
import styled from 'styled-components'

const WrapperCard = styled.div`
  margin: 4px;
  display: inline-block;
  height: 256px;
  width: 128px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`

interface IProps {
  item: Movie
}

function CarouselItemComponent(props: IProps) {
  const navigate = useNavigate()
  const { item } = props

  const onItemClick = () => {
    navigate(`/detail/${item.id}`)
  }

  return (
    <WrapperCard onClick={onItemClick}>
      <CarouselItemImage imageUrl={item.posterUrl} />
      <CarouselItemTitle title={item.title} />
    </WrapperCard>
  )
}

export default CarouselItemComponent
