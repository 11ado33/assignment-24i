import React from 'react'

interface IProps {
    text: string
}

const CarouselTitle = (props: IProps) => {
    return (
        <h2>{props.text}</h2>
    )
}

export default CarouselTitle
