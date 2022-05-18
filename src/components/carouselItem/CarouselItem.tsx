import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CarouselItem } from '../../types/carousel'
import CarouselItemTitle from './title/CarouselItemTitle'
import CarouselItemImage from './image/CarouselItemImage'

interface IProps {
  item: CarouselItem
}

function CarouselItemComponent(props: IProps) {
  const navigate = useNavigate()
  const { item } = props

  const onItemClick = () => {
    console.log(item.id)
    navigate(`/detail/${item.id}`)
  }

  return (
    <div
      onClick={onItemClick}
      style={{
        display: 'inline-block',
        height: '256px',
        width: '128px',
        scrollbarWidth: 'none'
      }}
    >
      <CarouselItemImage imageUrl={item.posterUrl} />
      <CarouselItemTitle title={item.title} />
    </div>
  )
}

export default CarouselItemComponent
