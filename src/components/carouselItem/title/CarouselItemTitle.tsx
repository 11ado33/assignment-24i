import React from 'react'

interface IProps {
    title: string
}

const CarouselItemTitle = (props: IProps) => {
    const {title} = props
    return (<p style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{title}</p>)
}

export default CarouselItemTitle
