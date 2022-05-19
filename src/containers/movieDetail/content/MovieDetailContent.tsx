import React from 'react'
import { Movie } from '@/types/carousel'
import styled from 'styled-components'

// Styled component for container wrapper of movie detail content
const Wrapper = styled.div`
  flex: 50;
  padding: 8px;
`

interface IProps {
  movie: Movie
}

/*
 * Container for movie detail content
 */
const MovieDetailContent = (props: IProps) => {
  const { movie } = props
  return (
    <Wrapper>
      <table>
        <tr>
          <th>Director</th>
          <td>{movie.director}</td>
        </tr>
        <tr>
          <th>Duration</th>
          <td>{movie.duration} minutes</td>
        </tr>
      </table>
      <p>{movie.plot}</p>
    </Wrapper>
  )
}

export default MovieDetailContent
