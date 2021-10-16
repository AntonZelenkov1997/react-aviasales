import { makeAutoObservable } from "mobx";

type tabsFilterObjectType = {
    filterTabs: arrayFilterTabsType,
    SET_SELECTED_TAB: (id :string) => void,
    GET_FILTER_TABS: arrayFilterTabsType,
    GET_SELECTED_FILTER_TAB: filterTabsType | undefined
}

const tabsFilterObject: tabsFilterObjectType = {
  filterTabs: [
    {
      title: "Самый дешевый",
      id: "filterTabByPrice",
      isSelected: true,
    },
    {
      title: "Самый быстрый",
      id: "filterTabByTime",
      isSelected: false,
    },
    {
      title: "Самый оптимальный",
      id: "filterTabByOptimum",
      isSelected: false,
    },
  ],

  SET_SELECTED_TAB(id: string) {
    this.filterTabs = this.filterTabs.map((tab) => {
      if (tab.id === id) {
        return {
          ...tab,
          isSelected: true,
        };
      }

      return {
        ...tab,
        isSelected: false,
      };
    });
  },

  get GET_FILTER_TABS() {
    return this.filterTabs;
  },

  get GET_SELECTED_FILTER_TAB() {
      return this.filterTabs.find((tab) => tab.isSelected)
  }
};

const tabsFilterStore = makeAutoObservable(tabsFilterObject);

export default tabsFilterStore;
