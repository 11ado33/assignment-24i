import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieByID } from '@/service/dataService'
import { Movie } from '@/types/carousel'
import MissingMovieContainer from '@/containers/missingMovie/MissingMovieContainer'
import MovieDetailContainer from '@/containers/movieDetail/MovieDetailContainer'

/*
 * Component for detail page to show movie info
 */
const DetailPage = () => {
  const { id } = useParams()

  const [fetchTried, setFetchTried] = useState(false)
  const [movie, setMovie] = useState<Movie | null>(null)

  if (!fetchTried) {
    getMovieByID(id as string).then((item) => setMovie(item))
    setFetchTried(true)
  }

  return (
    <div>
      {!movie && fetchTried && <MissingMovieContainer />}
      {movie && <MovieDetailContainer movie={movie} />}
    </div>
  )
}

export default DetailPage
