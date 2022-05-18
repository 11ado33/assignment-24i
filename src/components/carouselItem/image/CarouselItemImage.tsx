import React from 'react'

interface IProps {
    imageUrl: string
}

const CarouselItemImage = (props: IProps) => {
    const {imageUrl} = props

    return (<img width="100px" height="200px" src={imageUrl}/>)
}

export default CarouselItemImage;
