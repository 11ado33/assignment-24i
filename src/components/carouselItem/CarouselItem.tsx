import React from 'react'
import {CarouselItem} from '../../types/carousel'
import CarouselItemTitle from './title/CarouselItemTitle'
import CarouselItemImage from './image/CarouselItemImage'

interface IProps {
    item: CarouselItem
}

const CarouselItemComponent = (props: IProps) => {
    const {item} = props
    return (
        <div style={{display: 'inline-block', height: '256px', width: '128px', scrollbarWidth: 'none'}}>
            <CarouselItemImage imageUrl={item.posterUrl}/>
            <CarouselItemTitle title={item.title}/>
        </div>
    )
}

export default CarouselItemComponent
