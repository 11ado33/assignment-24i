import React from 'react'

interface IProps {
    text: string
}

const CarouselTitle = (props: IProps) => {
    return (
        <div>{props.text}</div>
    )
}

export default CarouselTitle
