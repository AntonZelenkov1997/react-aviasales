import { asideFilterEnum } from "../types/enums/asideFilterEnum";

type filterFunctionType = (
  item: Ticket,
  selectedAsideFilters: Array<keyof typeof asideFilterEnum>
) => boolean;

const filterFunctionForAside: filterFunctionType = (
  item,
  selectedAsideFilters
) => {
  let filter: keyof typeof asideFilterEnum;

  for (filter of selectedAsideFilters) {
    if (filter === "all") return true;

    return item.segments[0].stops.length === asideFilterEnum[filter];
  }

  return false

};

export default filterFunctionForAside;
