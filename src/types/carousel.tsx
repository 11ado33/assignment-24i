export interface CarouselItem {
  id: string
  title: string
  year: string
  posterUrl: string
}

export interface CarouselSectors {
  title: string
  items: Array<CarouselItem>
}

export interface CarouselData {
  carousels: Array<CarouselSectors>
}
