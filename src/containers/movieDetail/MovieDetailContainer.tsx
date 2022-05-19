import React from 'react'
import { Movie } from '@/types/carousel'
import styled from 'styled-components'
import MovieDetailHead from './head/MovieDetailHead'
import MovieDetailContent from './content/MovieDetailContent'

// Page wrapper styled component
const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex !important;
  flex-direction: column;
`

interface IProps {
  movie: Movie
}

/*
 * Container for movie detail
 */
const MovieDetailContainer = (props: IProps) => {
  const { movie } = props
  return (
    <PageWrapper>
      <MovieDetailHead movie={movie} />
      <MovieDetailContent movie={movie} />
    </PageWrapper>
  )
}
// [END]
export default MovieDetailContainer
