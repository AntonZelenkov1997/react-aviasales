import { asideFilterEnum } from "./enums/asideFilterEnum"

declare type asideStopsFiltersType = {
    title: string,
    id: keyof typeof asideFilterEnum,
    isSelected: boolean
}

declare type arrayAsideStopsFilters = Array<asideStopsFiltersType>