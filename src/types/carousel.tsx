export interface CarouselData {
    carousels: Array<CarouselSectors>
}

export interface CarouselSectors {
    title: string
    items: Array<CarouselItem>
}

export interface CarouselItem {
    id: string
    title: string
    year: string
    posterUrl: string
}
