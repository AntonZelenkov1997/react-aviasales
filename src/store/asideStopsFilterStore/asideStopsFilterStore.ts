import { makeAutoObservable } from "mobx";
import { arrayAsideStopsFilters } from "../../types/asideStopsFilter";
import { asideFilterEnum } from "../../types/enums/asideFilterEnum";

type asideStopsFilterObjectType = {
  asideStopsFilters: arrayAsideStopsFilters;
  SET_TOGGLE_ASIDE_STOPS_FILTER: (id: keyof typeof asideFilterEnum) => void;
  GET_ASIDE_STOPS_FILTERS: arrayAsideStopsFilters;
  GET_SELECTED_ASIDE_STOPS_FILTERS: arrayAsideStopsFilters;
};

const asideStopsFilterObject: asideStopsFilterObjectType = {
  asideStopsFilters: [
    {
      title: "Все",
      id: "all",
      isSelected: true,
    },
    {
      title: "Без пересадок",
      id: "stops_0",
      isSelected: false,
    },
    {
      title: "1 пересадка",
      id: "stops_1",
      isSelected: false,
    },
    {
      title: "2 пересадки",
      id: "stops_2",
      isSelected: false,
    },
    {
      title: "3 пересадки",
      id: "stops_3",
      isSelected: false,
    },
  ],

  SET_TOGGLE_ASIDE_STOPS_FILTER(id) {
    this.asideStopsFilters = [...this.asideStopsFilters].map((asideFilter) => {
      if (asideFilter.id === id) {
        asideFilter.isSelected = !asideFilter.isSelected;
      }

      return asideFilter;
    });
  },

  get GET_ASIDE_STOPS_FILTERS() {
      return this.asideStopsFilters
  },

  get GET_SELECTED_ASIDE_STOPS_FILTERS() {
    return this.asideStopsFilters.filter((asideStop) => asideStop.isSelected)
  }
};

const asideStopsFilterStore = makeAutoObservable(asideStopsFilterObject)

export default asideStopsFilterStore