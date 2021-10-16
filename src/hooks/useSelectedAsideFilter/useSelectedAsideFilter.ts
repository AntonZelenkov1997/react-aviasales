import filterFunctionForAside from "../../utils/filterFunctionForAside";
import useStore from "../useStore/useStore";

type useSelectedAsideFilterType = (tickets: arrayTicket) => arrayTicket;

const useSelectedAsideFilter: useSelectedAsideFilterType = (tickets) => {
  const { asideStopsFilterStore } = useStore();

  const selectedAsideFilters = [
    ...asideStopsFilterStore.GET_SELECTED_ASIDE_STOPS_FILTERS,
  ].map((item) => item.id);

  const newTicketsArray = [...tickets].filter((item) =>
    filterFunctionForAside(item, selectedAsideFilters)
  );

  return newTicketsArray;
};

export default useSelectedAsideFilter;
