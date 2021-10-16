enum tabsFilterEnums {
    filterTabByPrice = "filterTabByPrice",
    filterTabByTime = "filterTabByTime",
    filterTabByOptimum = "filterTabByOptimum"
}

declare type filterTabsType = {
    title: string,
    id: keyof typeof tabsFilterEnums
    isSelected: boolean
}

declare type arrayFilterTabsType = Array<filterTabsType>