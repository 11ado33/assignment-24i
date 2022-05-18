import React from 'react'
import { CarouselItem } from '../../types/carousel'

interface IProps {
  movie: CarouselItem
}

const MovieDetailContainer = (props: IProps) => {
  const { movie } = props
  return (
    <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
      <div style={{ width: '100%', height: '50%', position: 'absolute' }}>
        <img
          style={{ objectFit: 'cover' }}
          src={movie.posterUrl}
          width="100%"
          height="100%"
        />
        <div style={{ position: 'absolute', bottom: 0 }}>{movie.title}</div>
      </div>
    </div>
  )
}

export default MovieDetailContainer
