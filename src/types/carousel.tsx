export interface Movie {
  id: string
  title: string
  year: string
  posterUrl: string
  actors: string
  director: string
  duration: string
  genres: Array<string>
  plot: string
}

export interface CarouselSectors {
  title: string
  items: Array<Movie>
}

export interface CarouselData {
  carousels: Array<CarouselSectors>
}
