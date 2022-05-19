import React from 'react'
import { Movie } from '@/types/carousel'
import CarouselItemComponent from '../carouselItem/CarouselItem'
import styled from 'styled-components'

// Styled component of carousel scroller wrapper
const Wrapper = styled.div`
  overflow: auto;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`

interface IProps {
  items: Array<Movie>
}

/*
 * Component of carousel scroller for {@link CarouselItemComponent}
 */
function CarouselScroller(props: IProps) {
  return (
    <Wrapper>
      {props.items.map((item) => (
        <CarouselItemComponent key={item.id} item={item} />
      ))}
    </Wrapper>
  )
}

export default CarouselScroller
