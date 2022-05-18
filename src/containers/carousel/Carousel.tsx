import React from 'react'
import {CarouselSectors} from '../../types/carousel'
import CarouselTitle from '../../components/carouselTitle/CarouselTitle'
import CarouselScroller from '../../components/carouselScroller/CarouselScroller'

interface IProps {
    data: CarouselSectors
}

const Carousel = (props: IProps) => {
    const {data} = props
    return (
        <div>
            <CarouselTitle text={data.title}/>
            <CarouselScroller items={data.items}/>
        </div>
    )
}

export default Carousel
