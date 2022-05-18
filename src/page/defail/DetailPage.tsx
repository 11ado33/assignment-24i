import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCarouselItem } from '../../service/dataService'
import { CarouselItem } from '../../types/carousel'
import MissingMovieContainer from '../../containers/missingMovie/MissingMovieContainer'
import MovieDetailContainer from '../../containers/movieDetail/MovieDetailContainer'

export const DetailPage = () => {
  const { id } = useParams()

  const [fetchTried, setFetchTried] = useState(false)
  const [movie, setMovie] = useState<CarouselItem | null>(null)

  if (!fetchTried) {
    getCarouselItem(id!).then((item) => setMovie(item))
    setFetchTried(true)
  }

  return (
    <div>
      {!movie && fetchTried && <MissingMovieContainer />}
      {movie && <MovieDetailContainer movie={movie} />}
    </div>
  )
}
