import useStore from "../useStore/useStore";

const useSelectedFilterTab = () => {
    const { ticketsStore, tabsFilterStore } = useStore();

    if (tabsFilterStore.GET_SELECTED_FILTER_TAB?.id === "filterTabByPrice") {
        return [...ticketsStore.GET_TICKETS_BY_PRICE]
    }

    if (tabsFilterStore.GET_SELECTED_FILTER_TAB?.id === "filterTabByTime") {
        return [...ticketsStore.GET_TICKETS_BY_TIME]
    }

    if (tabsFilterStore.GET_SELECTED_FILTER_TAB?.id === "filterTabByOptimum") {
        return [...ticketsStore.GET_TICKETS]
    }

    return [...ticketsStore.GET_TICKETS]
}

export default useSelectedFilterTab;