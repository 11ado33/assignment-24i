export interface CarouselData {
    carousels: Array<CarouselSectors>
}

export interface CarouselSectors {
    title: string
    items: Array<CarouselItem>
}

export interface CarouselItem {
    title: string
    year: string
    posterUrl: string
}
