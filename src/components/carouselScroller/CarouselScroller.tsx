import React from 'react'
import {CarouselItem} from '../../types/carousel'
import CarouselItemComponent from '../carouselItem/CarouselItem'

interface IProps {
    items: Array<CarouselItem>
}

const CarouselScroller = (props: IProps) => {
    return (
        <div style={{overflow: 'auto', whiteSpace: 'nowrap'}}>{props.items.map(item =>
            <CarouselItemComponent item={item}/>)}
        </div>
    )
}

export default CarouselScroller
