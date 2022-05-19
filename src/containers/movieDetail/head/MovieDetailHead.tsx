import React from 'react'
import styled from 'styled-components'
import { Movie } from '@/types/carousel'

// Styled component of movie detail head wrapped
const HeadWrapper = styled.div`
  width: 100%;
  height: 50%;
  flex: 50;
  position: relative;
`

// Styled component of movie detail head image
const HeadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

// Styled component of movie head title
const HeadTitle = styled.h1`
  position: absolute;
  bottom: 0;
  margin-left: 16px;
  text-shadow: 4px 4px 4px white;
`

interface IProps {
  movie: Movie
}

/*
 * Component of movie detail head
 */
const MovieDetailHead = (props: IProps) => {
  const { movie } = props

  return (
    <HeadWrapper>
      <HeadImage src={movie.posterUrl} />
      <HeadTitle>{movie.title}</HeadTitle>
    </HeadWrapper>
  )
}

export default MovieDetailHead
